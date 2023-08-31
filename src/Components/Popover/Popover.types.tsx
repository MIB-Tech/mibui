import {ReactElement, ReactNode} from 'react';
import {PopupProps} from '@mui/base/Unstable_Popup/Popup.types';
import {PopupPlacement} from "@mui/base";

export type PopoverTrigger =  'click'| 'hover'
export type PopoverProps = {
    children: ReactElement,
    content: ReactNode,
    trigger?: PopoverTrigger
    // disableArrow?: boolean
    placement?: PopupPlacement
} & Omit<PopupProps, 'children' | 'content' | 'placement'>

export const POPUP_PLACEMENTS: PopupPlacement[] = [
    'top', 'right', 'bottom', 'left',
    'top-start', 'right-start', 'bottom-start', 'left-start',
    'top-end', 'right-end', 'bottom-end', 'left-end',
];