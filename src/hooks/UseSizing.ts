import {SizingType} from '../@types/Sizing.ts';
import {useMemo} from 'react';
import {twMerge} from 'tailwind-merge';

export const useSizing = (size?: SizingType) => {

  const paddingY = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `py-[4px]`;
      case 'lg':
        return `py-[8px]`;
      default:
        return `py-[6px]`;
    }
  }, [size]);

  const paddingStart = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `ps-[8px]`;
      case 'lg':
        return `ps-[12px]`;
      default:
        return `ps-[10px]`;
    }
  }, [size]);

  const paddingEnd = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `pe-[8px]`;
      case 'lg':
        return `pe-[12px]`;
      default:
        return `pe-[10px]`;
    }
  }, [size]);

  const paddingX = useMemo<string>(() => twMerge(paddingStart, paddingEnd), [paddingStart, paddingEnd]);
  const padding = useMemo<string>(() => twMerge(paddingX, paddingY), [paddingX, paddingY]);

  const spacingSize = useMemo<number>(() => {
    switch (size) {
      case 'sm':
        return 8;
      case 'lg':
        return 12;
      default:
        return 10;
    }
  }, [size]);
  

  return {
    spacingSize,
    paddingStart,
    paddingEnd,
    paddingX,
    paddingY,
    padding,
    text: size && `text-${size}`
  };
};