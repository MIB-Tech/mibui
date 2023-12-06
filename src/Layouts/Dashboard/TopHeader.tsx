import {BellIcon, Cog6ToothIcon, QuestionMarkCircleIcon, UserIcon} from '@heroicons/react/20/solid';
import {FC, HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';
import {Icon, Menu, MenuHeader, MenuItem, MenuMenu, MenuToggle, Tooltip} from '../../Components';
import {useAuth} from '../../pages/Auth/Login/Login.tsx';
import {AuthState} from '../../pages/Auth/Login/Login.types.ts';


const IconButton: FC<HTMLAttributes<HTMLButtonElement>> = ({className, ...props}) => (
  <button
    className={twMerge(
      'flex items-center text-sm text-gray-600 hover:text-gray-700',
      className
    )}
    {...props}
  />
);

export const TopHeader = () => {
  const {auth, logout} = useAuth();
  const user = auth?.user as AuthState['user'];

  return (
    <nav className='flex items-center flex-wrap justify-end mx-auto ml-3 p-2'>
      <div className='flex items-center'>
        <IconButton className='mr-5'>
          <Icon icon={QuestionMarkCircleIcon} className='me-1'/> Help
        </IconButton>
        <IconButton className='mr-5'>
          <Tooltip content='Notifications'>
            <Icon icon={BellIcon} className='me-1'/>
          </Tooltip>
        </IconButton>
        <IconButton className='mr-5'>
          <Tooltip content='Settings'>
            <Icon icon={Cog6ToothIcon} className='me-1'/>
          </Tooltip>
        </IconButton>
        <IconButton className='mr-5'>
          <Menu>
            <MenuToggle slots={{root: 'div'}}>
              <Tooltip content='Profile'>
                <Icon icon={UserIcon} className='me-1'/>
              </Tooltip>
            </MenuToggle>
            <MenuMenu>
              <MenuHeader>
                <div className='font-bold'>
                  {user['@title']}
                </div>
                <div className='truncate text-sm font-medium hover:text-primary-500 hover:underline'>
                  @{user.username}
                </div>
              </MenuHeader>
              <MenuItem onClick={logout}>
                Logout
              </MenuItem>
            </MenuMenu>
          </Menu>
        </IconButton>
      </div>
    </nav>
  );
};