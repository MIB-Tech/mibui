import {ElementType, FC, useMemo} from 'react';
import {Menu, MenuItemsProps} from '@headlessui/react';
import {twMerge} from 'tailwind-merge';
import {DropdownDirection} from './Dropdown.types.tsx';


const  DropdownMenu: FC<MenuItemsProps<ElementType> & { direction?: DropdownDirection }> = (
  {
    className,
    direction = DropdownDirection.ButtonStart,
    ...props
  }
) => {

  const directionClassname = useMemo<string>(() => {
    switch (direction) {
      case DropdownDirection.TopStart:
        return 'bottom-full mb-2';
      case DropdownDirection.TopEnd:
        return 'bottom-full mb-2 right-0';
      case DropdownDirection.ButtonStart:
        return 'mt-2';
      case DropdownDirection.ButtonEnd:
        return 'mt-2 right-0';
    }
  }, [direction])

  return (
    <Menu.Items
      className={twMerge(
        'absolute py-2 w-52 z-10 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
        directionClassname,
        className
      )}
      {...props}
    />
  )
}

export default DropdownMenu