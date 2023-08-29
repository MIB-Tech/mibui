import {HTMLAttributes} from 'react';
import {ColorType} from '../../@types/Color.ts';
import {VariantType} from '../../@types/Variant.ts';

import {SizingType} from '../../@types/Sizing.ts';


export type BadgeProps = {
  variant?: VariantType
  color?: ColorType
  outline?: boolean
  size?: SizingType
  closable?: boolean
  onClose?: () => void
} & HTMLAttributes<HTMLSpanElement>