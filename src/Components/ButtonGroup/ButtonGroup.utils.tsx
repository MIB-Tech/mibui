import {ColorVariant, ColorVariantEnum, WeightEnum} from '../Button/Button.types.tsx';
import {Children, cloneElement, Fragment, isValidElement, ReactNode} from 'react';

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
export const getChildren = (children: ReactNode): ReactNode => {

  return Children.map(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === Fragment) {
        return getChildren(child.props.children);
      }

      return cloneElement(child);
    }

    return child;
  })
};