import {FC} from 'react';
import {SidebarItemProps} from './Sidebar.types.ts';
import {ListItem} from '../List';
import {twMerge} from 'tailwind-merge';
import {Icon} from '../SvgIcon';

const SidebarItem: FC<SidebarItemProps> = ({className, icon, children, ...props}) => (
  <ListItem
    className={twMerge(
      icon && 'flex items-center gap-3',
      className
    )}
    {...props}
  >
    {icon && <Icon icon={icon} size={5}/>}
    {children}
  </ListItem>
);

export default SidebarItem;