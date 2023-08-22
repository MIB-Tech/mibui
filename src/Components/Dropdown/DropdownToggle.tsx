import {FC} from 'react';
import {Menu} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import {DropdownToggleProps} from './Dropdown.types.tsx';
import {twMerge} from 'tailwind-merge';
import {Icon} from '../SvgIcon';

const DropdownToggle: FC<DropdownToggleProps> = ({children, hideIcon, className, ...props}) => (
  <Menu.Button
    className={twMerge(
      !hideIcon && 'flex items-center',
      className
    )}
    {...props}
  >
    {typeof children === 'function' ? children({open: false}) : children}
    {!hideIcon && (
      <Icon
        icon={ChevronDownIcon}
        size={5}
        className='inline-block ml-1 -mr-1 --text-violet-200 hover:text-violet-100'
      />
    )}
  </Menu.Button>
)

export default DropdownToggle