import {RouteObject} from 'react-router/dist/lib/context';
import {RouteEnum} from '../../@types/Route.ts';
import {ListingPage} from './pages/Listing';
import {CreatePage} from './pages/Create';

const ROUTES: RouteObject = {
  id: RouteEnum.PurchaseOrder,
  path: 'purchase-orders',
  children: [
    {
      id: RouteEnum.PurchaseOrderListing,
      path: 'list',
      element: <ListingPage/>,
      index: true
    },
    {
      id: RouteEnum.PurchaseOrderCreate,
      path: 'create',
      element: <CreatePage/>,
    },
    // {
    //   id: RouteEnum.PurchaseOrderDetail,
    //   path: ':id',
    //   children: [
    //     {
    //       id: RouteEnum.PurchaseOrderUpdate,
    //       path: 'update'
    //     },
    //     {
    //       id: RouteEnum.PurchaseOrderDelete,
    //       path: 'delete'
    //     }
    //   ]
    // }
  ]
};


export default ROUTES;