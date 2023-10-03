import {ColorVariant} from './Button.types.tsx';


export const getColorClassName = ({color, weight = 500}: ColorVariant) => {
  let className = color as string;
  switch (color) {
    case 'secondary':
      break;
    default:
      className += `-${weight}`;
  }

  return className;
};