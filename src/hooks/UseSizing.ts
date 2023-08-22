import {SizingType} from '../@types/Sizing.ts';
import {useMemo} from 'react';

export const useSizing = (size?: SizingType) => {
  const padding = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `px-[8px] py-[4px]`;
      case 'lg':
        return `px-[12px] py-[8px]`;
      default:
        return `px-[10px] py-[6px]`;
    }
  }, [size]);

  return {
    padding,
    text: size && `text-${size}`
  };
};