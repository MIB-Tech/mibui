import {RouteObject} from 'react-router/dist/lib/context';
import {RouteEnum} from '../../@types/Route.ts';
import {ListingPage} from './pages/Listing';
import {CreatePage} from './pages/Create';

const ROUTES: RouteObject = {
  id: RouteEnum.Receipt,
  path: 'receipts',
  children: [
    {
      id: RouteEnum.ReceiptListing,
      path: 'list',
      element: <ListingPage/>,
      index: true
    },
    {
      id: RouteEnum.ReceiptCreate,
      path: 'create',
      element: <CreatePage/>,
    },
    {
      id: RouteEnum.ReceiptUpdate,
      path: ':id',
      element: <CreatePage/>,
    },
    // {
    //   id: RouteEnum.ReceiptDetail,
    //   path: ':id',
    //   children: [
    //     {
    //       id: RouteEnum.ReceiptUpdate,
    //       path: 'update'
    //     },
    //     {
    //       id: RouteEnum.ReceiptDelete,
    //       path: 'delete'
    //     }
    //   ]
    // }
  ]
};


export default ROUTES;