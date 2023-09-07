import {getColorClassName} from '../Components/Button/Button.utils.tsx';
import {useMemo} from 'react';
import {ColorType} from '../@types/Color.ts';
import {VariantType} from '../@types/Variant.ts';

type UseVariantColorProps = {
  color?: ColorType,
  variant?: VariantType
}
export const useVariantColor = ({color = 'primary', variant = 'solid'}: UseVariantColorProps) => {
  const solid = getColorClassName({color});
  const light = color === 'black' ? 'gray-300' : getColorClassName({color, weight: 100});

  const background = useMemo<string>(() => {
    switch (variant) {
      case 'solid':
        return solid;
      case 'light':
        return light;
      case 'clean':
        return 'white';
    }
  }, [solid, light, variant]);

  const hoverBackground = useMemo<string>(() => {
    switch (variant) {
      case 'solid':
      case 'light':
        return color === 'black' ?
          `gray-${variant === 'solid' ? 700 : 400}` :
          getColorClassName({color, weight: variant === 'solid' ? 600 : 200})
          ;
      case 'clean':
        return 'gray-100';
    }
  }, [color, variant]);

  const text = useMemo<string>(() => {
    return variant === 'solid' ? 'white' : solid;
  }, [solid, variant]);

  const activeBackground = useMemo<string>(() => {
    return variant === 'clean' ? 'gray-100' : hoverBackground;
  }, [hoverBackground, variant]);

  const outline = useMemo<string>(() => {
    switch (variant) {
      case 'solid':
        return color === 'black' ? 'gray-400' : getColorClassName({color, weight: 300});
      default:
        return solid;
    }
  }, [color, solid, variant]);


  return {
    background,
    text,
    outline,
    hover: {
      background: hoverBackground
    },
    active: {
      background: activeBackground
    },
  };
};