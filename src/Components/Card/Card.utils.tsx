import {ColorVariant, ColorVariantEnum, WeightEnum} from './Card.types.tsx';

export const cardUtils = ({color, weight = WeightEnum.W500}: ColorVariant) => {
  let className = color as string
  switch (color) {
    case ColorVariantEnum.Black:
      break;
    default:
      className += `-${weight}`
  }

  return className
}