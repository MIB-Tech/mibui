import {MenuButtonProps} from '@mui/base';
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

export type MenuToggleButtonProps = DropdownToggleProps & ButtonProps