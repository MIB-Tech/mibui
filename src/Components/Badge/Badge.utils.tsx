import {ColorVariant, ColorVariantEnum, WeightEnum} from './Badge.types.tsx';

export const badgeUtils = ({color, weight = WeightEnum.W500}: ColorVariant) => {
  let className = color as string
  switch (color) {
    case ColorVariantEnum.Black:
      break;
    default:
      className += `-${weight}`
  }

  return className
}