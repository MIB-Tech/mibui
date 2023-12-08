import {NavLink} from 'react-router-dom';
import {AgnosticRouteObject} from '@remix-run/router/dist/utils';
import {Trans} from 'react-i18next';
import {twMerge} from 'tailwind-merge';

export const MenuItem = (props: { route: AgnosticRouteObject }) => {
  const {id, path = '/'} = props.route;

  return (
    <NavLink
      to={path}
      className={({isActive}) =>
        twMerge(
          'flex items-end text-gray-900 rounded [&.active]:bg-primary-500 [&.active]:text-white hover:bg-gray-100 px-3 py-0.5',
          isActive && 'active'
        )
      }
    >
      <Trans i18nKey={id}/>
    </NavLink>
  )
  // return (
  //   <button
  //     className={classNames(
  //       'flex items-end text-gray-900 dark:text-white rounded-full [&.active]:bg-primary-500 [&.active]:text-white hover:bg-gray-100 px-3 py-0.5',
  //       active && 'active'
  //     )}
  //     onClick={() => {
  //       // setActiveRoute(id)
  //     }}
  //   >
  //     <span>{data?.title}</span>
  //     {children?.length && (
  //       <ChevronDownIcon className="header-icon"/>
  //     )}
  //   </button>
  // )
}