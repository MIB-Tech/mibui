import {forwardRef, useMemo} from 'react';
import {Switch as BaseSwitch} from '@mui/base/Switch';
import {twMerge} from 'tailwind-merge';
import {SwitchProps} from './Switch.types.ts';
import {useVariantStyles} from '../../hooks/UseVariantStyles';
import {resolveSlotProps, useThumb} from './Switch.utils.ts';

const Switch = forwardRef<HTMLSpanElement, SwitchProps>((
  {
    size = 'md',
    color = 'primary',
    slotProps,
    ...props
  },
  ref
  ) => {
  const classNames = useVariantStyles({color});
  const rootSlotProps = slotProps?.root;

  const rootSizingClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return 'w-10 h-6';
      case 'md':
        return 'w-12 h-7';
      case 'lg':
        return 'w-14 h-8';
    }
  }, [size]);

  const thumbPositionClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return 'left-5';
      case 'md':
        return 'left-6';
      case 'lg':
        return 'left-7';
    }
  }, [size]);

  return (
    <BaseSwitch
      ref={ref}
      {...props}
      slotProps={{
        ...slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(rootSlotProps, ownerState);

          return {
            ...resolvedSlotProps,
            className: twMerge(
              'relative inline-block m-2.5',
              rootSizingClassName,
              ownerState.disabled ? 'opacity-50' : 'cursor-pointer',
              resolvedSlotProps?.className
            )
          };
        },
        input: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(rootSlotProps, ownerState);

          return {
            ...resolvedSlotProps,
            className: twMerge(
              'absolute w-full h-full top-0 left-0 opacity-0 z-10',
              ownerState.disabled && 'cursor-not-allowed',
              resolvedSlotProps?.className
            )
          };
        },
        track: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(rootSlotProps, ownerState);

          return {
            ...resolvedSlotProps,
            className: twMerge(
              'absolute block w-full h-full rounded-2xl',
              ownerState.checked ?
                color === 'secondary' ? 'bg-gray-400' : classNames.background :
                'bg-gray-300 dark:bg-gray-600',
              resolvedSlotProps?.className
            )
          };
        },
        thumb: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(rootSlotProps, ownerState);
          const {checked, focusVisible} = ownerState;

          return {
            ...resolvedSlotProps,
            className: twMerge(
              'block top-1 rounded-2xl relative transition-all',
              checked ? thumbPositionClassName : 'left-1',
              focusVisible ?
                `${checked ? 'bg-white' : 'bg-slate-500'} shadow-outline-switch` :
                'bg-white',
              thumb.sizingClassName,
              resolvedSlotProps?.className
            )
          };
        }
      }}
    />
  );
});

export default Switch;
