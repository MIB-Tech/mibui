import {HTMLAttributes} from 'react';

export enum ButtonVariant {
  Solid = 'solid',
  Soft = 'soft',
  Clean = 'clean',
}

export enum SizeEnum {
  Small = 'sm',
  Large = 'xl',
}

export enum ColorVariantEnum {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Black = 'black'
}

export enum WeightEnum {
  W50 = 50,
  W100 = 100,
  W200 = 200,
  W300 = 300,
  W400 = 400,
  W500 = 500,
  W600 = 600,
  W700 = 700,
  W800 = 800,
  W900 = 900,
  W950 = 950,
}

export type ColorVariant = {
  color: ColorVariantEnum
  weight?: WeightEnum
}
export type ButtonProps = {
  variant?: ButtonVariant
  color?: ColorVariantEnum
  outline?: boolean
  size?: SizeEnum
  disabled?: boolean
  active?: boolean
  loading?: boolean
} & Omit<HTMLAttributes<HTMLButtonElement>, 'color'>