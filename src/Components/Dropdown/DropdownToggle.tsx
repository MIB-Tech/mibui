import {FC} from 'react';
import {Menu} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import {DropdownToggleProps} from './Dropdown.types.tsx';
import {twMerge} from 'tailwind-merge';

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
      <ChevronDownIcon
        className="inline-block ml-1 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
      />
    )}
  </Menu.Button>
)

export default DropdownToggle