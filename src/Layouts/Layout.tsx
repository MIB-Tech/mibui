import '../App.css';
import {FC, HTMLAttributes} from 'react';
import {useAuth} from '../pages/Auth/Login/Login.tsx';
import axios from 'axios';
import {AuthState} from '../pages/Auth/Login/Login.types.ts';

const SetupAxios = () => {
  const {auth, setAuth} = useAuth();
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  axios.interceptors.request.use(
    async config => {
      if (!config.url?.endsWith('/custom/auth/refresh')) {
        const token = auth?.token;
        if (token && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    error => Promise.reject(error)
  );
  axios.interceptors.response.use(
    response => response,
    error => {
      const originalRequest = error.config;
      const refreshToken = auth?.refreshToken;

      if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        return axios.post<AuthState>('/custom/auth/refresh', {refreshToken})
          .then(res => {
            if (res.status === 200) {
              setAuth(res.data);
              originalRequest.headers.Authorization = `Bearer ${res.data.token}`;

              return axios(originalRequest);
            }
          })
          .catch(refreshError => {
            console.error('Error refreshing token:', {...refreshError});
            return Promise.reject(refreshError);
          });
      }

      return Promise.reject(error);
    }
  );


  return <></>;
};

const Layout: FC<HTMLAttributes<HTMLDivElement>> = ({...props}) => {

  return (
    <>
      <SetupAxios/>
      <div {...props} />
    </>
  );
};

export default Layout;
