import {FC} from 'react';
import {DropdownItem, Icon} from '../../../Components';
import {ChatBubbleLeftIcon, ClipboardIcon, Cog6ToothIcon} from '@heroicons/react/24/solid';

export const DropdownOptions: FC<{ icon?: boolean }> = ({icon}) => {

  return (
    <>
      <DropdownItem>
        {icon && (<Icon icon={Cog6ToothIcon} className='mr-2 h-5 w-5'/>)}
        Account Settings
      </DropdownItem>
      <DropdownItem>
        {icon && (<Icon icon={ChatBubbleLeftIcon} className='mr-2 h-5 w-5'/>)}
        Support
      </DropdownItem>
      <DropdownItem>
        {icon && (<Icon icon={ClipboardIcon} className='mr-2 h-5 w-5'/>)}
        License
      </DropdownItem>
    </>
  );
};