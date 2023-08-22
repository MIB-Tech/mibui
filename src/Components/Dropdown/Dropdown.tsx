import {ElementType, FC} from 'react';
import {Menu} from '@headlessui/react'
import {MenuProps} from '@headlessui/react';
import {twMerge} from 'tailwind-merge';

const Dropdown: FC<MenuProps<ElementType>> = ({className, ...props}) => {

  return (
    <Menu
      as="div"
      className={twMerge(
        'relative inline-block text-left',
        className,
      )}
      {...props}
    />
  )
}

export default Dropdown