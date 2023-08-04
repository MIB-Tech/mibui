import {forwardRef} from 'react';
import {UnstyledInputProps} from './Input.types.ts';
import {twMerge} from 'tailwind-merge';

const UnstyledInput = forwardRef<HTMLInputElement, UnstyledInputProps>(({className, ...props}, ref) => {


  return (
    <input
      ref={ref}
      type="text"
      className={twMerge(
        'border-0 focus:outline-none focus:ring-0 p-0 placeholder:text-gray-400 ',
        props.disabled ? 'cursor-not-allowed opacity-60' : '',
        className
      )}
      {...props}
    />
  )
})

export default UnstyledInput