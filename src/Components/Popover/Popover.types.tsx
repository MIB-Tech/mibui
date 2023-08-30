import {MenuButtonProps} from '@headlessui/react';
import {ElementType} from 'react';

export enum PopoverDirection {
  Left = 'left',
  Top = 'top',
  Bottom = 'bottom',
  Right = 'right'
}

export type PopoverToggleProps = {
  hideIcon?: boolean
} & MenuButtonProps<ElementType>
