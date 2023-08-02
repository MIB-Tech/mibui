import {MenuButtonProps} from '@headlessui/react';
import {ElementType} from 'react';

export enum DropdownDirection {
  Top = 'top',
  Button = 'bottom',
}

export type DropdownToggleProps = {
  hideIcon?: boolean
} & MenuButtonProps<ElementType>