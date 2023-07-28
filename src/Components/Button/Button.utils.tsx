import {ButtonProps, ButtonVariant, ColorVariant, ColorVariantEnum, WeightEnum} from './Button.types.tsx';

export const SOLID_WEIGHT = WeightEnum.W500;
export const SOFT_WEIGHT = WeightEnum.W100;

export const getColorClassName = ({color, weight = WeightEnum.W500}: ColorVariant) => {
  let className = color as string
  switch (color) {
    case ColorVariantEnum.Black:
      break;
    default:
      className += `-${weight}`
  }

  return className
}

export const getSolidColor = (color: ColorVariantEnum) => getColorClassName({color, weight: SOLID_WEIGHT});
export const getSoftColor = (color: ColorVariantEnum) => {
  if (color === ColorVariantEnum.Black) {
    return 'gray-300'
  }

  return getColorClassName({color, weight: SOFT_WEIGHT})
}
export const getOutlineColor = ({variant = ButtonVariant.Solid, color = ColorVariantEnum.Primary}: Pick<ButtonProps, 'variant' | 'color'>) => {
  switch (variant) {
    case ButtonVariant.Solid:
      return color === ColorVariantEnum.Black ? 'gray-400' : getColorClassName({color, weight: SOFT_WEIGHT + 200})
    default:
      return getSolidColor(color)
  }
}
export const getOutlineClassName = ({
                                      variant = ButtonVariant.Solid,
                                      color = ColorVariantEnum.Primary
                                    }: Pick<ButtonProps, 'variant' | 'color'>) => {

  return `ring-1 ring-inset ring-${getOutlineColor({color, variant})}`
}