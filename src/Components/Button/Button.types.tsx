import {ColorType} from '../../@types/Color.ts';
import {VariantType} from '../../@types/Variant.ts';

import {SizingType} from '../../@types/Sizing.ts';
import {WeightType} from '../../@types/Weight.ts';
import {ButtonProps as MuiButtonProps} from '@mui/base';

export type ColorVariant = {
  color: ColorType
  weight?: WeightType
}
export type ButtonProps = {
  square?: boolean
  variant?: VariantType
  color?: ColorType
  outline?: boolean
  size?: SizingType
  disabled?: boolean
  active?: boolean
  loading?: boolean
  closing?: boolean
} & Omit<MuiButtonProps, 'color'>