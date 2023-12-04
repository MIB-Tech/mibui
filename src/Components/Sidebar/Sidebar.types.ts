import {ListItemProps, ListProps} from '../List/List.types.ts';
import {SvgIconProps} from '../SvgIcon/SvgIcon.types.ts';
import {HTMLAttributes} from 'react';

export type SidebarProps = ListProps

export type SidebarItemProps = {
  hasChildren?: boolean
} & ListItemProps & Partial<Pick<SvgIconProps, 'icon'>>
export type SidebarAccordionProps = {
  label: string
} & HTMLAttributes<HTMLDivElement>