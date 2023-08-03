import {FC} from 'react';
import {UnstyledInputProps} from './Input.types.ts';
import {twMerge} from 'tailwind-merge';

const UnstyledInput: FC<UnstyledInputProps> = ({className, ...props}) => {


  return (
    <input
      type="text"
      className={twMerge(
        'border-0 focus:outline-none focus:ring-0 p-0',
        props.disabled ? 'cursor-not-allowed opacity-60': '',
        className
      )}
      {...props}
    />
  )
}

export default UnstyledInput