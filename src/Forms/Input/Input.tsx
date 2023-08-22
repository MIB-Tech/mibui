import {forwardRef, useMemo} from 'react';
import {InputProps} from './Input.types.ts';
import {UnstyledInput} from './index.ts';
import {twMerge} from 'tailwind-merge';


const Input = forwardRef<HTMLInputElement, InputProps>(({className, size, ...props}, ref) => {
  const sizeClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `px-[8px] py-[4px]`;
      case 'lg':
        return `px-[12px] py-[8px]`;
      default:
        return `px-[10px] py-[6px]`;
    }
  }, [size])

  return (
    <UnstyledInput
      ref={ref}
      className={twMerge(
        'rounded w-full text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600',
        sizeClassName,
        size && `text-${size}`,
        className
      )}
      {...props}
    />
  )
})

export default Input