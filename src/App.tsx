import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import {PRIVATE_ROUTES} from './pages';
import {RouteObject} from 'react-router/dist/lib/context';
import {RouteEnum} from './@types/Route.ts';
import PublicLayout from './Layouts/PublicLayout.tsx';
import {LoginFormExample} from './pages/ApplicationUI/Auth/LoginForm/Page.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const PUBLIC_ROUTES: RouteObject = {
  id: RouteEnum.Home,
  path: '/',
  element: <PublicLayout/>,
  children: [
    {
      index: true,
      element: <Navigate to='/auth' replace />
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
          element: <LoginFormExample/>
        }
      ]
    }
  ]
};

const queryClient = new QueryClient()

const App = () => {
  const isAuthenticated = true;
  const router = createBrowserRouter(isAuthenticated ? [PRIVATE_ROUTES] : [PUBLIC_ROUTES]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
};

export default App;
