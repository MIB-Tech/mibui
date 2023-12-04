import {FC} from 'react';
import {SidebarAccordionProps} from './Sidebar.types.ts';
import {twMerge} from 'tailwind-merge';
import {Icon} from '../SvgIcon';
import {ArrowLeftIcon} from '@heroicons/react/20/solid';

const SidebarAccordion: FC<SidebarAccordionProps> = ({className, children, ...props}) => (
  <div
    className={twMerge(
      'flex justify-between',
      // icon && 'flex items-center gap-3',
      className
    )}
    {...props}
  >
    <div>{children}</div>
    <Icon icon={ArrowLeftIcon} size={5}/>
  </div>
);

export default SidebarAccordion;