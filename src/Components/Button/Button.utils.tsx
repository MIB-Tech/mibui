import {ColorVariant, ColorVariantEnum, WeightEnum} from './Button.types.tsx';

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