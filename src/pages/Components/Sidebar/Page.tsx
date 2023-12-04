import {Preview, Sidebar, SidebarItem} from '../../../Components';
import {HomeIcon, ShoppingBagIcon} from '@heroicons/react/20/solid';

const Page = () => (
  <div className='flex flex-col gap-12'>
    <Preview title='Basic' className='flex justify-center bg-white'>
      <Sidebar>
        <SidebarItem>
          Dashboard
        </SidebarItem>
        <SidebarItem>
          E-commerce
        </SidebarItem>
      </Sidebar>
    </Preview>
    <Preview title='Custom Item' className='flex justify-center bg-white'>
      <Sidebar>
        <SidebarItem icon={HomeIcon}>
          Dashboard
        </SidebarItem>
        <SidebarItem icon={ShoppingBagIcon}>
          E-commerce
        </SidebarItem>
      </Sidebar>
    </Preview>
    <Preview title='Multi Level Sidebar' className='flex justify-center bg-white'>
      <Sidebar>
        <SidebarItem>
          Dashboard
        </SidebarItem>
        <SidebarItem hasChildren>
          Products
        </SidebarItem>
      </Sidebar>
    </Preview>
  </div>
);

export default Page;