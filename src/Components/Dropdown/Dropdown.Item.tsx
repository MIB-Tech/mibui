import {ElementType, FC} from 'react';
import {ButtonProps} from '../Button/Button.types.tsx';
import {Menu, MenuItemProps} from '@headlessui/react';
import {Button} from '../Button';
import {twMerge} from 'tailwind-merge';

const DropdownItem: FC<MenuItemProps<ElementType> & ButtonProps> = ({className, ...props}) => {
  const activeClassName = 'border-s-primary-500'

  return (
    <Menu.Item
      as={Button}
      variant='clean'
      color='secondary'
      className={twMerge(
        `flex w-full text-start font-medium border-s-transparent rounded-none truncate`,
        !props.disabled && `border-s-2 hover:${activeClassName}`,
        props.active && activeClassName,
        className
      )}
      {...props}
    />
  )
}

export default DropdownItem