import {HTMLAttributes} from 'react';
import {ColorType} from '../../@types/Color.ts';
import {VariantType} from '../../@types/Variant.ts';

import {SizingType} from '../../@types/Sizing.ts';
import {WeightType} from '../../@types/Weight.ts';

export type ColorVariant = {
  color: ColorType
  weight?: WeightType
}
export type ButtonProps = {
  icon?: boolean
  variant?: VariantType
  color?: ColorType
  outline?: boolean
  size?: SizingType
  disabled?: boolean
  active?: boolean
  loading?: boolean
  closing?: boolean
} & Omit<HTMLAttributes<HTMLButtonElement>, 'color'>