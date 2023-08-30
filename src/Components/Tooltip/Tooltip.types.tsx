import {ReactElement} from 'react';
import {PopupProps} from '@mui/base/Unstable_Popup/Popup.types';

export type TooltipTrigger = 'hover' | 'click'
export type TooltipProps = {
  children: ReactElement,
  content: string,
  trigger?: TooltipTrigger
  disableArrow?: boolean
} & Omit<PopupProps, 'children'>