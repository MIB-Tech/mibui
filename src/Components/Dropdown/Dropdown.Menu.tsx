import {ElementType, FC} from 'react';
import {Menu, MenuItemsProps} from '@headlessui/react';
import {twMerge} from 'tailwind-merge';
import {DropdownDirection} from './Dropdown.types.tsx';


const DropdownMenu: FC<MenuItemsProps<ElementType> & { direction?: DropdownDirection }> = (
  {
    className,
    direction,
    ...props
  }
) => {

  return (
    <Menu.Items
      className={twMerge(
        'absolute right-0 py-2 my-2 w-52 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
        direction === DropdownDirection.Top && 'bottom-full',
        className
      )}
      {...props}
    />
  )
}

export default DropdownMenu