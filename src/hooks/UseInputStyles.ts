import {InputProps} from '../Forms/Input/Input.types.ts';
import {twMerge} from 'tailwind-merge';

export const useInputStyles = (props?: Pick<InputProps, 'disabled' | 'className'> | undefined) => {
  const {disabled, className} = {...props}

  return {
    unstyled: twMerge(
      'border-0 focus:outline-none focus:ring-0 p-0 placeholder:text-gray-400',
      disabled && 'cursor-not-allowed opacity-60',
      className
    ),
    className: twMerge(
      'rounded w-full text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600',
      className
    )
  };
};