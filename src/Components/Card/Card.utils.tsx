import {ColorVariant, ColorVariantEnum, WeightEnum} from '../Button/Button.types.tsx';


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