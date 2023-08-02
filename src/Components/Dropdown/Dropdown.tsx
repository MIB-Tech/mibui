import {ElementType, FC} from 'react';
import {Menu} from '@headlessui/react'
import {MenuProps} from '@headlessui/react';

const Dropdown: FC<MenuProps<ElementType>> = ({...props}) => {

  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
      {...props}
    />
  )
}

export default Dropdown