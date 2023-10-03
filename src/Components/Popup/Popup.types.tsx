import {ReactElement, ReactNode} from 'react';
import {PopupProps as BasePopupProps} from '@mui/base/Unstable_Popup/Popup.types';
import {PopupPlacement as BasePopupPlacement} from '@mui/base';

export type PopupPlacement = BasePopupPlacement
export type PopupTrigger = 'hover' | 'click'
export type PopupProps = {
  children: ReactElement,
  content: ReactNode,
  trigger?: PopupTrigger
  // disableArrow?: boolean
  placement?: PopupPlacement
  setOpen?: (open: boolean) => void
} & Omit<BasePopupProps, 'children' | 'content' | 'placement'>