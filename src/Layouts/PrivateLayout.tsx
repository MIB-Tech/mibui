import '../App.css';
import {TopHeader} from './Dashboard/TopHeader.tsx';
import {HeaderMenu} from './Dashboard/HeaderMenu.tsx';
import {NavLink, Outlet} from 'react-router-dom';
import {Trans} from 'react-i18next';
import {useActiveRouteContext} from '../hooks/UseActiveRouteContext.tsx';
import {twMerge} from 'tailwind-merge';
import {Toaster} from 'react-hot-toast';
import Breadcrumb from './Breadcrumb.tsx';
import {Sidebar} from '../Components';
import SidebarItem from '../Components/Sidebar/Sidebar.Item.tsx';
import {PRIVATE_ROUTES} from '../pages';
import {FC, HTMLAttributes} from 'react';

export const TextLogo: FC<HTMLAttributes<HTMLDivElement>> = ({className, ...props}) => (
  <div className={twMerge('text-3xl font-semibold tracking-wide', className)} {...props}>
    MIB<span className='text-primary-500'>UI</span>
  </div>
);

function PrivateLayout() {
  const {contextRoute, parentRoute, title} = useActiveRouteContext();
  const childRoutes = parentRoute?.children || [];
  const hasChild = childRoutes.length > 0;
  const routes = PRIVATE_ROUTES.children;

  return (
    <>
      <div className='fixed top-0 left-0 z-10 h-screen bg-gradient-to-b from-white to-gray-50 to-20%'>
        <TextLogo className='mt-7 text-center'/>
        <Sidebar
          className=''
        >
          {routes?.map(({id}) => (
            <SidebarItem
              key={id}
              className='hover:bg-gray-200'
            >
              <Trans i18nKey={id}/>
            </SidebarItem>
          ))}
        </Sidebar>
      </div>

      <div className='sm:ml-64'>
        <TopHeader/>
        <div className='p-4'>
          <div className='mb-5'>
            <h2 className='text-3xl font-bold'>
              {title}
            </h2>
            <Breadcrumb/>
          </div>
          <Outlet/>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Toaster/>
      <TopHeader/>
      <HeaderMenu/>
      <div className='max-w-[85%] mx-auto my-5'>
        <h2 className='text-3xl font-bold mt-5'>
          {title}
        </h2>
        {/*<Breadcrumb />*/}
        <div className={twMerge('pt-5', hasChild && 'grid grid-cols-8 gap-4')}>
          {hasChild && (
            <div>
              <div className='flex flex-col space-y-2 border-s border-gray-200'>
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
  );
}

export default PrivateLayout;
