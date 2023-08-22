import {MenuButtonProps} from '@headlessui/react';
import {ElementType} from 'react';

export enum DropdownDirection {
  TopStart = 'top-start',
  TopEnd = 'top-end',
  ButtonStart = 'bottom-start',
  ButtonEnd = 'bottom-end',
}

export type DropdownToggleProps = {
  hideIcon?: boolean
} & MenuButtonProps<ElementType>