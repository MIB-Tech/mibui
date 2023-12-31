import '../App.css';
import {TopHeader} from './Dashboard/TopHeader.tsx';
import {Outlet, useMatch, useNavigate} from 'react-router-dom';
import {Trans} from 'react-i18next';
import {twMerge} from 'tailwind-merge';
import {Sidebar, SidebarAccordion} from '../Components';
import SidebarItem from '../Components/Sidebar/Sidebar.Item.tsx';
import {PRIVATE_ROUTES} from '../pages';
import {FC, HTMLAttributes} from 'react';
import {AgnosticRouteObject} from '@remix-run/router/dist/utils';
import Layout from './Layout.tsx';

const MenuItem: FC<AgnosticRouteObject> = ({id, path = '/', children}) => {
  const match = useMatch({path, end: false});
  const isActive = !!match;

  if (children) {
    return (
      <SidebarAccordion
        key={id}
        className={twMerge('border-s-2 border-s-transparent hover:border-s-primary-500', isActive && 'border-s-primary-500')}
        label={<Trans i18nKey={id}/>}
      >
        {children.filter(child => !child.path?.includes(':')).map(childRoute => (
          <ChildMenuItem
            {...childRoute}
            key={childRoute.id}
            path={`${path}/${childRoute.path}`}
          />
        ))}
      </SidebarAccordion>
    );
  }
  return (
    <SidebarItem
      key={id}
      className='hover:bg-gray-200'
    >
      <Trans i18nKey={id}/>
    </SidebarItem>
  );
};
const ChildMenuItem: FC<AgnosticRouteObject> = ({id, path = '/'}) => {
  const match = useMatch({path});
  const isActive = !!match;
  const navigate = useNavigate();

  return (
    <SidebarItem
      className={twMerge('border-s-2 border-s-transparent hover:border-s-primary-500', isActive && 'border-s-primary-500')}
      onClick={() => navigate(path)}
    >
      <Trans i18nKey={id}/>
    </SidebarItem>
  );
};
export const TextLogo: FC<HTMLAttributes<HTMLDivElement>> = ({className, ...props}) => (
  <div className={twMerge('text-3xl font-semibold tracking-wide', className)} {...props}>
    ACHAT
    {/*A<span className='text-primary-500'>CH</span>AT*/}
  </div>
);

function PrivateLayout() {
  const routes = PRIVATE_ROUTES.children;

  return (
    <Layout>
      <div className='fixed top-0 left-0 z-10 h-screen bg-gradient-to-b from-white to-gray-50 to-20%'>
        <TextLogo className='mt-7 text-center'/>
        <Sidebar className='overflow-auto h-full'>
          {routes?.filter(route => !route.path?.includes(':')).map(MenuItem)}
        </Sidebar>
      </div>

      <div className='sm:ml-64'>
        <TopHeader/>
        <div className='container mx-auto mt-5 px-5'>
          <Outlet/>
        </div>
      </div>
    </Layout>
  );
}

export default PrivateLayout;
