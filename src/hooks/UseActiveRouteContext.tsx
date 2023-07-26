import {useTranslation} from 'react-i18next';
import {useLocation, useMatches} from 'react-router-dom';
import {router} from '../main.tsx';

export const useActiveRouteContext = () => {
  const {t} = useTranslation()
  const location = useLocation()
  const locationPathnames = location.pathname.split('/');
  const matches = useMatches();
  const current = [...matches].pop();
  const parent = router.routes[0].children?.find(route => route.path === locationPathnames[1])
  const title = current ? t(current.id) : 'TODO'

  return {
    parent,
    title
  }
}