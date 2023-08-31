import {forwardRef, useMemo} from 'react';
import {UnstyledInputProps} from './Input.types.ts';
import {Input as MuiInput, prepareForSlot, TextareaAutosize} from '@mui/base';
import {twMerge} from 'tailwind-merge';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';
import {useSizing} from '../../hooks/UseSizing.ts';

const TextareaSlot = prepareForSlot(TextareaAutosize);

const UnstyledInput = forwardRef<HTMLInputElement, UnstyledInputProps>((
  {
    className,
    size,
    // startAdornment,
    // endAdornment,
    slotProps,
    ...props
  }, ref) => {
  const inputStyles = useInputStyles();
  const sizing = useSizing(size);
  const root = slotProps?.root;
  const input = slotProps?.input;

  const spaceSize = useMemo<number>(() => {
    switch (size) {
      case 'sm':
        return 1;
      case 'lg':
        return 3;
      default:
        return 2;
    }
  }, [size]);

  return (
    <MuiInput
      ref={ref}
      {...props}
      slotProps={{
        ...slotProps,
        input: {
          ...input,
          className: twMerge(
            'bg-transparent',
            inputStyles.unstyled,
            input && 'className' in input && input.className
          ),
        },
        root: {
          ...root,
          className: twMerge(
            `flex gap-x-${spaceSize}`,
            sizing.text,
            sizing.padding,
            root && 'className' in root && root.className,
            className
          )
        }
      }}
      slots={{
        textarea: TextareaSlot,
        ...props.slots
      }}
    />
  );
});

export default UnstyledInput