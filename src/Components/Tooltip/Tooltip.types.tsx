import {ReactElement, ReactNode} from 'react';
import {PopupProps} from '@mui/base/Unstable_Popup/Popup.types';
import {PopupPlacement} from '@mui/base';

export type TooltipPlacement = PopupPlacement
export type PopupTrigger = 'hover' | 'click'
export type TooltipProps = {
  children: ReactElement,
  content: ReactNode,
  trigger?: PopupTrigger
  // disableArrow?: boolean
  placement?: TooltipPlacement
} & Omit<PopupProps, 'children' | 'content' | 'placement'>