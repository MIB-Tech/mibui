import {RouteObject} from 'react-router/dist/lib/context';
import {COMPONENT_ROUTES} from './Components';
import {FORM_ROUTES} from './Forms';
import {RouteEnum} from '../@types/Route.ts';
import {APPLICATION_UI_ROUTES} from './ApplicationUI';
import PrivateLayout from '../Layouts/PrivateLayout.tsx';
import {PURCHASE_ORDER_ROUTES} from '../modules/PurchaseOrder';

const PRIVATE_ROUTES: RouteObject = {
  id: RouteEnum.Home,
  path: '/',
  element: <PrivateLayout/>,
  children: [
    PURCHASE_ORDER_ROUTES,
    COMPONENT_ROUTES,
    FORM_ROUTES,
    APPLICATION_UI_ROUTES
  ]
};


export default PRIVATE_ROUTES;