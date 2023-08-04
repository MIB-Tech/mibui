import {HTMLAttributes, ReactNode} from 'react';

export type InputGroupProps = {
  leading?: ReactNode,
  trailing?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export enum InnerPositionEnum {
  Left = 'left',
  Right = 'right'
}
export type InnerButtonProps = {
  position?: InnerPositionEnum
} & HTMLAttributes<HTMLDivElement>