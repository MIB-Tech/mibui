import '../App.css';
import {FC, HTMLAttributes} from 'react';
import {useAuth} from '../pages/Auth/Login/Login.tsx';
import axios from 'axios';

const SetupAxios = () => {
  const {auth} = useAuth();

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  axios.interceptors.request.use(
    config => {
      const token = auth?.token;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    },
    error => {
      Promise.reject(error);
    }
  );
  // axios.interceptors.response.use(
  //   response => response,
  //   error => {
  //     const originalRequest = error.config;
  //
  //     if (
  //       error.response.status === 401 &&
  //       originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
  //     ) {
  //       // router.push('/login')
  //       return Promise.reject(error);
  //     }
  //
  //     if (error.response.status === 401 && !originalRequest._retry) {
  //       originalRequest._retry = true;
  //       const refreshToken = auth?.refreshToken;
  //       return axios.post('/custom/auth/refresh', {refreshToken}).then(res => {
  //         console.log(res);
  //         if (res.status === 201) {
  //           // localStorageService.setToken(res.data)
  //
  //           return axios(originalRequest);
  //         }
  //       });
  //     }
  //     return Promise.reject(error);
  //   }
  // );

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
