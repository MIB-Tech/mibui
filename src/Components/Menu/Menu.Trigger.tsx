import {forwardRef} from 'react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import {twMerge} from 'tailwind-merge';
import {Icon} from '../SvgIcon';
import {MenuButton} from '@mui/base';
import {DropdownToggleProps} from './Menu.types.tsx';

const MenuTrigger = forwardRef<HTMLButtonElement, DropdownToggleProps>((
  {
    children,
    withToggleIcon,
    className,
    ...props
  },
  ref,
) => (
  <MenuButton
    ref={ref}
    className={twMerge(withToggleIcon && 'flex items-center', className)}
    {...props}
  >
    {children}
    {withToggleIcon && (
      <Icon
        icon={ChevronDownIcon}
        size={5}
        className='inline-block ms-1'
      />
    )}
  </MenuButton>
));

export default MenuTrigger;