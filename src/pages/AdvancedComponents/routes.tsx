import {RouteEnum} from '../../@types/Route.ts';
import {RouteObject} from 'react-router/dist/lib/context';
import {FilterPage} from './Filter';

const ROUTES: RouteObject = {
  id: RouteEnum.Advanced,
  path: 'advanced',
  children: [
    {
      id: RouteEnum.AdvancedFilter,
      path: 'filter',
      element: <FilterPage/>,
      index: true
    }
  ]
};


export default ROUTES;