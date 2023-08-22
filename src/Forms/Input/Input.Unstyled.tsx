import {forwardRef} from 'react';
import {UnstyledInputProps} from './Input.types.ts';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';

const UnstyledInput = forwardRef<HTMLInputElement, UnstyledInputProps>(({...props}, ref) => {
  const inputStyles = useInputStyles(props);

  return (
    <input
      ref={ref}
      {...props}
      className={inputStyles.unstyled}
    />
  );
});

export default UnstyledInput