import {HTMLAttributes, ReactNode} from 'react';
import {ColorType} from "../../@types/Color.ts";
import {VariantType} from "../../@types/Variant.ts";
export enum TooltipPlacement {
    topStart = 'top-start',
    top = 'top',
    topEnd = 'top-end',
    bottomStart = 'bottom-start',
    bottom = 'bottom',
    bottomEnd = 'bottom-end',
    leftStart = 'left-start',
    left = 'left',
    leftEnd = 'left-end',
    rightStart = 'right-start',
    right = 'right',
    rightEnd = 'right-end'
}

export enum TriggerEventEnum {
    hover = 'hover',
    click = 'click',
    default = hover
}

export type TooltipType = {
    children: ReactNode,
    content: string,
    placement?: TooltipPlacement,
    color?: ColorType,
    variant?: VariantType
} & HTMLAttributes<HTMLDivElement>