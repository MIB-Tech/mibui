import {FC} from 'react';
import {twMerge} from 'tailwind-merge';
import {MenuDivider} from './index.ts';
import {MenuItem, MenuItemProps} from '@mui/base';

const MenuHeader: FC<MenuItemProps> = ({className, ...props}) => {

  return (
    <>
      <MenuItem
        className={twMerge(
          `mx-4 my-2`,
          className
        )}
        {...props}
        slots={{
          root: 'div'
        }}
      />
      <MenuDivider/>
    </>
  )
}

export default MenuHeader