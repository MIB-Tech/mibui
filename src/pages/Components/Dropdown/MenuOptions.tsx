import {FC} from 'react';
import {MenuItem, Icon} from '../../../Components';
import {ChatBubbleLeftIcon, ClipboardIcon, Cog6ToothIcon} from '@heroicons/react/24/solid';

export const MenuOptions: FC<{ icon?: boolean }> = ({icon}) => {

  return (
    <>
      <MenuItem>
        {icon && (<Icon icon={Cog6ToothIcon} size={5} className='mr-2'/>)}
        Account Settings
      </MenuItem>
      <MenuItem>
        {icon && (<Icon icon={ChatBubbleLeftIcon} size={5} className='mr-2'/>)}
        Support
      </MenuItem>
      <MenuItem>
        {icon && (<Icon icon={ClipboardIcon} size={5} className='mr-2'/>)}
        License
      </MenuItem>
    </>
  );
};