import {ReactElement, ReactNode} from 'react';
import {PopupProps as BasePopupProps} from '@mui/base/Unstable_Popup/Popup.types';
import {PopupPlacement as BasePopupPlacement} from '@mui/base';
import {CardProps} from '../Card/Card.types.tsx';

export type PopupPlacement = BasePopupPlacement
export type PopupTrigger = 'hover' | 'click'
export type PopupProps = {
  children: ReactElement,
  content: ReactNode,
  trigger?: PopupTrigger
  // disableArrow?: boolean
  placement?: PopupPlacement
} & Omit<BasePopupProps, 'children' | 'content' | 'placement'>
& Pick<CardProps, 'header'|'footer'>