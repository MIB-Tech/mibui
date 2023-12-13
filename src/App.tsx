import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import {PRIVATE_ROUTES} from './pages';
import {RouteObject} from 'react-router/dist/lib/context';
import {RouteEnum} from './@types/Route.ts';
import PublicLayout from './Layouts/PublicLayout.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {LoginPage} from './pages/Auth';
import {RecoilRoot, useRecoilState} from 'recoil';
import {AUTH_STATE} from './pages/Auth/Login/Login.tsx';
import {Toaster} from 'react-hot-toast';

const PUBLIC_ROUTES: RouteObject = {
  id: RouteEnum.Home,
  path: '/',
  element: <PublicLayout/>,
  children: [
    {
      index: true,
      element: <Navigate to='/auth' replace/>
    },
    {
      id: RouteEnum.ApplicationUIAuth,
      path: 'auth',
      children: [
        {
          index: true,
          element: <Navigate to='/auth/login' replace />
        },
        {
          id: RouteEnum.ApplicationUIAuthLoginForm,
          path: 'login',
          index: true,
          element: <LoginPage/>
        }
      ]
    }
  ]
};

const queryClient = new QueryClient();


const Router = () => {
  const [token] = useRecoilState(AUTH_STATE);
  const router = createBrowserRouter(!!token ? [PRIVATE_ROUTES] : [PUBLIC_ROUTES]);

  return <RouterProvider router={router}/>;
};

const App = () => {

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Toaster/>
        <Router/>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
