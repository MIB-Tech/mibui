import {RouteObject} from 'react-router/dist/lib/context';
import App from '../App.tsx';
import {COMPONENT_ROUTES} from './Components';
import {FORM_ROUTES} from './Forms';
import {RouteEnum} from '../@types/Route.ts';
import {ADVANCED_COMPONENTS_ROUTES} from './AdvancedComponents';

const ROUTES: RouteObject = {
  id: RouteEnum.Home,
  path: '/',
  element: <App/>,
  children: [
    COMPONENT_ROUTES,
    FORM_ROUTES,
    ADVANCED_COMPONENTS_ROUTES,
  ]
};


export default ROUTES;