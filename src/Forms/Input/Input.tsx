import {forwardRef} from 'react';
import {InputProps} from './Input.types.ts';
import {UnstyledInput} from './index.ts';
import {twMerge} from 'tailwind-merge';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';
import InputErrorAdornment from "./InputErrorAdorment.tsx";


const Input = forwardRef<HTMLInputElement, InputProps>((
  {className, error, errorMessage, ...props},
  ref
) => {
  const inputStyles = useInputStyles();

  return (
    <UnstyledInput
      error={error || !!errorMessage}
      endAdornment={errorMessage && (
       <InputErrorAdornment/>
      )}
      {...props}
      ref={ref}
      className={twMerge(inputStyles.className, className)}

    />
  );
});

export default Input;