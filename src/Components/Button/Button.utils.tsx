import {ColorVariant} from './Button.types.tsx';

export const SOLID_WEIGHT = 500;
export const SOFT_WEIGHT = 100;

export const getColorClassName = ({color, weight = 500}: ColorVariant) => {
  let className = color as string;
  switch (color) {
    case 'black':
      break;
    default:
      className += `-${weight}`;
  }

  return className;
};