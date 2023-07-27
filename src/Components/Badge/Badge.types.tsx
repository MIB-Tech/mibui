import {HTMLAttributes} from 'react';

export enum BadgeVariant {
  Default = 'default',
  Outline = 'outline',
}

export enum BadgeSizeEnum {
  Small = 'sm',
  Large = 'xl',
}

export enum ColorVariantEnum {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Black = 'black',
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
export type BadgeType = {
  variant?: BadgeVariant
  color?: ColorVariant
  size?: BadgeSizeEnum
  disabled?: boolean
  active?: boolean
  round?: {
    start?: 'xl' | 'none'
    end?: 'xl' | 'none'
  }
} & Omit<HTMLAttributes<HTMLButtonElement>, 'color'>