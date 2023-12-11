import {RouteObject} from 'react-router/dist/lib/context';
import {RouteEnum} from '../@types/Route.ts';
import PrivateLayout from '../Layouts/PrivateLayout.tsx';
import {PURCHASE_ORDER_ROUTES} from '../modules/PurchaseOrder';

const PRIVATE_ROUTES: RouteObject = {
  id: RouteEnum.Home,
  path: '/',
  element: <PrivateLayout/>,
  children: [
    PURCHASE_ORDER_ROUTES,
    // COMPONENT_ROUTES,
    // FORM_ROUTES,
    // APPLICATION_UI_ROUTES
  ]
};


export default PRIVATE_ROUTES;