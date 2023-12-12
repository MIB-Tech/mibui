import {RouteEnum} from '../../@types/Route.ts';
import {RouteObject} from 'react-router/dist/lib/context';
import {FormLayoutPage} from './FormLayout';
import {LoginFormPage} from './Auth';
import {ReportingPage} from "../Components/Reporting";

const ROUTES: RouteObject = {
  id: RouteEnum.ApplicationUI,
  path: 'application-ui',
  children: [
    {
      id: RouteEnum.ApplicationUIFormLayout,
      path: 'input',
      element: <FormLayoutPage/>,
      index: true
    },
    {
      id: RouteEnum.ApplicationUIAuth,
      path: 'auth',
      element: <LoginFormPage/>
    },
    {
      id: RouteEnum.Reporting,
      path: 'repo',
      element: <ReportingPage/>
    }
  ]
};


export default ROUTES;