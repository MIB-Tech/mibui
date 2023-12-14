import {MenuButtonProps, MenuItemProps as MuiMenuItemProps, DropdownProps as MuiDropdownProps} from '@mui/base';
import {ButtonProps} from '../Button/Button.types.tsx';

export enum DropdownDirection {
  TopStart = 'top-start',
  TopEnd = 'top-end',
  ButtonStart = 'bottom-start',
  ButtonEnd = 'bottom-end',
}

export type DropdownToggleProps = {
  withToggleIcon?: boolean
} & MenuButtonProps

export type MenuItemProps = MuiMenuItemProps & ButtonProps
export type DropdownProps = MuiDropdownProps

export type MenuToggleButtonProps = DropdownToggleProps & ButtonProps