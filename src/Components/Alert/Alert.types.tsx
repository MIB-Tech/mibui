import {HTMLAttributes, ReactNode} from 'react';
import {ColorType} from '../../@types/Color.ts';
import {VariantType} from '../../@types/Variant.ts';

export type AlertProps = {
  color?: ColorType;
  variant?: VariantType;
  icon?: ReactNode;
  title: ReactNode;
  dismissible?: boolean
} & Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'title'>