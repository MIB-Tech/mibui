import {getColorClassName, SOFT_WEIGHT, SOLID_WEIGHT} from '../Components/Button/Button.utils.tsx';
import {useMemo} from 'react';
import {ColorType} from '../@types/Color.ts';
import {VariantType} from '../@types/Variant.ts';

export const useVariantColor = ({color = 'primary', variant = 'solid'}: {
  color?: ColorType,
  variant?: VariantType
}) => {
  const solid = getColorClassName({color, weight: SOLID_WEIGHT});
  const soft = color === 'black' ? 'gray-300' : getColorClassName({color, weight: SOFT_WEIGHT});

  const background = useMemo<string>(() => {
    switch (variant) {
      case 'solid':
        return solid;
      case 'soft':
        return soft;
      case 'clean':
        return 'white';
    }
  }, [solid, soft, variant]);

  const hoverBackground = useMemo<string>(() => {
    switch (variant) {
      case 'solid':
        return color === 'black' ? 'gray-700' : getColorClassName({color, weight: SOLID_WEIGHT + 100});
      case 'soft':
        return color === 'black' ? 'gray-400' : getColorClassName({color, weight: SOFT_WEIGHT + 100});
      case 'clean':
        return soft;
    }
  }, [color, soft, variant]);

  const text = useMemo<string>(() => {
    return variant === 'solid' ? 'white' : solid;
  }, [solid, variant]);

  const activeBackground = useMemo<string>(() => {
    return hoverBackground;
  }, [hoverBackground]);

  const outline = useMemo<string>(() => {
    switch (variant) {
      case 'solid':
        return color === 'black' ? 'gray-400' : getColorClassName({color, weight: SOFT_WEIGHT + 200});
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