import {FC, useState} from 'react';
import {SidebarAccordionProps} from './Sidebar.types.ts';
import SidebarItem from './Sidebar.Item.tsx';
import {Icon} from '../SvgIcon';
import {ChevronDownIcon, ChevronLeftIcon} from '@heroicons/react/20/solid';
import {twMerge} from 'tailwind-merge';

const SidebarAccordion: FC<SidebarAccordionProps> = ({label, className, children, ...props}) => {
  const [open, setOpen] = useState<boolean>();

  return (
    <>
      <SidebarItem
        {...props}
        onClick={e => {
          props.onClick?.(e);
          setOpen(open => !open);
        }}
        className={twMerge('flex items-center', className)}
      >
        {label}
        <Icon
          icon={open ? ChevronDownIcon : ChevronLeftIcon}
          className='ms-auto'
          size={5}
        />
      </SidebarItem>
      {open && (
        <div className='ps-3'>
          {children}
        </div>
      )}
    </>
  );
};

export default SidebarAccordion;