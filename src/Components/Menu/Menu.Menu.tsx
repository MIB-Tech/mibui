import {ElementType, FC} from 'react';
import {twMerge} from 'tailwind-merge';
import {Menu as MuiMenu, MenuProps} from '@mui/base';


const Menu: FC<MenuProps<ElementType>> = (
  {
    className,
    ...props
  }
) => {

  return (
    <MuiMenu
      {...props}
      className={twMerge(
        'p-2',
        className
      )}
      slotProps={{
        listbox: {
          className: 'rounded shadow-lg border bg-white'
        },
      }}
    />
  );
}

export default Menu;