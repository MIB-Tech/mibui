import {ColorVariant} from './Button.types.tsx';


export const getColorClassName = ({color = 'primary', weight = 500}: Partial<ColorVariant>) => {
  let className = color as string;
  switch (color) {
    case 'secondary':
      break;
    default:
      className += `-${weight}`;
  }

  return className;
};