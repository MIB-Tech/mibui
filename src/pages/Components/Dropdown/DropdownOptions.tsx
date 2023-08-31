import {FC} from 'react';
import {MenuItem, Icon} from '../../../Components';
import {ChatBubbleLeftIcon, ClipboardIcon, Cog6ToothIcon} from '@heroicons/react/24/solid';

export const DropdownOptions: FC<{ icon?: boolean }> = ({icon}) => {

  return (
    <>
      <MenuItem>
        {icon && (<Icon icon={Cog6ToothIcon} className='mr-2 h-5 w-5'/>)}
        Account Settings
      </MenuItem>
      <MenuItem>
        {icon && (<Icon icon={ChatBubbleLeftIcon} className='mr-2 h-5 w-5'/>)}
        Support
      </MenuItem>
      <MenuItem>
        {icon && (<Icon icon={ClipboardIcon} className='mr-2 h-5 w-5'/>)}
        License
      </MenuItem>
    </>
  );
};