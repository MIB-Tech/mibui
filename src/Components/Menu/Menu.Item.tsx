import {FC} from 'react';
import {twMerge} from 'tailwind-merge';
import {MenuItem as MuiMenuItem} from '@mui/base';
import {ButtonSlot} from './Menu.Button.tsx';
import {MenuItemProps} from './Menu.types.tsx';

const MenuItem: FC<MenuItemProps> = ({className, ...props}) => (
  <MuiMenuItem
    slots={{
      root: ButtonSlot
    }}
    variant='clean'
    color={props.active ? 'primary' : 'secondary'}
    className={twMerge(
      `flex w-full text-start rounded-none truncate first:rounded-t last:rounded-b`,
      // !props.disabled && `hover:${activeClassName}`,
      // props.active && activeClassName,
      className
    )}
    {...props}
  />
);

export default MenuItem;