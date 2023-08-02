import {ElementType, FC} from 'react';
import {Menu, MenuItemProps} from '@headlessui/react';
import {twMerge} from 'tailwind-merge';
import {DropdownDivider} from './index.ts';

const DropdownHeader: FC<MenuItemProps<ElementType>> = ({className, ...props}) => {

  return (
    <>
      <Menu.Item
        as="div"
        className={twMerge(
          `mx-4 mb-2`,
          className
        )}
        {...props}
      />
      <DropdownDivider/>
    </>
  )
}

export default DropdownHeader