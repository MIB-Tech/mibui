import {useMemo} from 'react';
import {SwitchProps} from './Switch.types.ts';

export const resolveSlotProps = (fn: any, args: any) => typeof fn === 'function' ? fn(args) : fn;

export const useThumb = ({size = 'md'}: Pick<SwitchProps, 'size'>) => {
  const sizing = useMemo<number>(() => {
    switch (size) {
      case 'sm':
        return 3;
      case 'md':
        return 4;
      case 'lg':
        return 5;
    }
  }, [size]);

  return {
    sizing,
    sizingClassName: `w-${sizing} h-${sizing}`,
  };
};