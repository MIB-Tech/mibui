import * as React from 'react';
import {HTMLAttributes} from 'react';
import {InputProps} from '../Input/Textarea.types.ts';

export type IconElement = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
  title?: string,
  titleId?: string
} & React.RefAttributes<SVGSVGElement>>

export type InputGroupInputProps = {
  leading?: boolean,
  trailing?: boolean
} & InputProps

export type InputGroupProps = HTMLAttributes<HTMLDivElement>

export enum InnerPositionEnum {
  Left = 'left',
  Right = 'right'
}

export type InnerButtonProps = {
  position?: InnerPositionEnum
} & HTMLAttributes<HTMLDivElement>