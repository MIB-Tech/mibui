import {RouteEnum} from '../../@types/Route.ts';
import {RouteObject} from 'react-router/dist/lib/context';
import {FormLayoutPage} from './FormLayout';

const ROUTES: RouteObject = {
  id: RouteEnum.ApplicationUI,
  path: 'application-ui',
  children: [
    {
      id: RouteEnum.ApplicationUIFormLayout,
      path: 'input',
      element: <FormLayoutPage/>,
      index: true
    }
  ]
};


export default ROUTES;