import {ElementType, FC, useMemo} from 'react';
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

  const directionClassname = useMemo<string>(() => {
    switch (direction) {
      case DropdownDirection.TopStart:
      case DropdownDirection.TopEnd:
        return 'bottom-full'
      default:
        return 'right-0'
    }
  }, [direction])

  return (
    <Menu.Items
      className={twMerge(
        'absolute py-2 m-2 w-52 z-10 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
        directionClassname,
        className
      )}
      {...props}
    />
  )
}

export default DropdownMenu