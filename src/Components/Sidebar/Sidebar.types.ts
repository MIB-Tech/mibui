import {ListItemProps, ListProps} from '../List/List.types.ts';
import {SvgIconProps} from '../SvgIcon/SvgIcon.types.ts';
import {ReactNode} from 'react';

export type SidebarProps = ListProps

export type SidebarItemProps = {
} & ListItemProps & Partial<Pick<SvgIconProps, 'icon'>>
export type SidebarAccordionProps = {
  label: ReactNode
} & SidebarItemProps