import {useTranslation} from 'react-i18next';
import {useLocation, useMatches} from 'react-router-dom';
import ROUTES from '../pages/Components/routes.tsx';

export const useActiveRouteContext = () => {
  const {t} = useTranslation();
  const location = useLocation();
  const locationPaths = location.pathname.split('/');
  const matches = useMatches();
  const current = [...matches].pop();
  const rootRoute = ROUTES;
  const contextRoute = rootRoute.children?.find(route => route.path === locationPaths[1]);
  const parentRoute = contextRoute?.children?.find(route => route.path === locationPaths[2]);
  const title = current ? t(current.id) : 'TODO';

  return {
    parentRoute,
    contextRoute,
    title
  };
}