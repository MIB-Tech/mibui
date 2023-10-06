import {forwardRef} from 'react';
import {UnstyledInputProps} from './Input.types.ts';
import {Input as MuiInput, prepareForSlot, TextareaAutosize} from '@mui/base';
import {twMerge} from 'tailwind-merge';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';
import {InputRootSlot} from './Input.Root.tsx';
import {resolveSlotProps} from '../Select/Select.Option.tsx';


const TextareaSlot = prepareForSlot(TextareaAutosize);

const UnstyledInput = forwardRef<HTMLInputElement, UnstyledInputProps>((
  {
    slotProps,
    ...props
  }, ref) => {
  const inputStyles = useInputStyles();
  const input = slotProps?.input;

  return (
    <MuiInput
      ref={ref}
      {...props}
      slotProps={{
        ...slotProps,
        input: ownerState => {
          const resolvedSlotProps = resolveSlotProps(input, ownerState);

          return {
            ...resolvedSlotProps,
            className: twMerge(
              'bg-transparent',
              inputStyles.unstyled,
              resolvedSlotProps?.className
            ),
          };
        }
      }}
      slots={{
        textarea: TextareaSlot,
        root: InputRootSlot,
        ...props.slots
      }}
    />
  );
});

export default UnstyledInput;