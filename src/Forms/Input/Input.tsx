import {forwardRef} from 'react';
import {InputProps} from './Input.types.ts';
import {UnstyledInput} from './index.ts';
import {twMerge} from 'tailwind-merge';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';


const Input = forwardRef<HTMLInputElement, InputProps>((
  {className, ...props},
  ref
) => {
  const inputStyles = useInputStyles();

  return (
    <UnstyledInput
      {...props}
      ref={ref}
      className={twMerge(inputStyles.className, className)}
    />
  );
});

export default Input;