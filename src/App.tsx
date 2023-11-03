import './App.css';
import {TopHeader} from './Layouts/Dashboard/TopHeader.tsx';
import {HeaderMenu} from './Layouts/Dashboard/HeaderMenu.tsx';
import {NavLink, Outlet} from 'react-router-dom';
import {Trans} from 'react-i18next';
import {useActiveRouteContext} from './hooks/UseActiveRouteContext.tsx';
import {twMerge} from 'tailwind-merge';
import {Toaster} from 'react-hot-toast';


function App() {
  const {contextRoute, parentRoute, title} = useActiveRouteContext()
  const childRoutes = parentRoute?.children || []
  const hasChild = childRoutes.length > 0

  return (
    <>
      <Toaster/>
      <TopHeader/>
      <HeaderMenu/>
      <div className="max-w-[85%] mx-auto my-5">
        <h2 className="text-3xl font-bold mt-5">
          {title}
        </h2>
        {/*<Breadcrumb />*/}
        <div className={twMerge('pt-5', hasChild && 'grid grid-cols-8 gap-4')}>
          {hasChild && (
            <div>
              <div className="flex flex-col space-y-2 border-s border-gray-200">
                {childRoutes.map(childRoute => (
                  <NavLink
                    key={childRoute.id}
                    to={`${contextRoute?.path}/${parentRoute?.path}/${childRoute?.path}`}
                    className={({isActive}) => twMerge(
                      'border-s  hover:border-s-primary-500 ps-3',
                      isActive ?
                        'text-primary-600 border-s-primary-500 font-bold' :
                        'border-s-transparent'
                    )}
                  >
                    <Trans i18nKey={childRoute.id}/>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
          <div className={twMerge(hasChild && 'col-span-7')}>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
