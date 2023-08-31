import {FC} from 'react';
import {ButtonProps} from '../Button/Button.types.tsx';
import {twMerge} from 'tailwind-merge';
import {MenuItem as MuiMenuItem, MenuItemProps} from '@mui/base';
import {ButtonSlot} from './Menu.Button.tsx';

const MenuItem: FC<MenuItemProps & ButtonProps> = ({className, ...props}) => {

  return (
    <MuiMenuItem
      slots={{
        root: ButtonSlot
      }}
      variant='clean'
      color={props.active ? 'primary': 'secondary'}
      className={twMerge(
        `flex w-full text-start rounded-none truncate first:rounded-t last:rounded-b`,
        // !props.disabled && `hover:${activeClassName}`,
        // props.active && activeClassName,
        className
      )}
      {...props}
    />
  )
}

export default MenuItem;