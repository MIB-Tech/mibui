import {forwardRef, useMemo} from 'react';
import {InputProps} from './Input.types.ts';
import {UnstyledInput} from './index.ts';
import {twMerge} from 'tailwind-merge';
import {SizeEnum} from '../../Components/Button/Button.types.tsx';


const Input = forwardRef<HTMLInputElement, InputProps>(({className, size, ...props}, ref) => {
  const sizeClassName = useMemo<string>(() => {
    switch (size) {
      case SizeEnum.Small:
        return 'py-1 px-2'
      case SizeEnum.Large:
        return 'p-4'
      default:
        return 'p-2.5'
    }
  }, [size])

  return (
    <UnstyledInput
      ref={ref}
      className={twMerge(
        'rounded text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600',
        sizeClassName,
        size && `text-${size}`,
        className
      )}
      {...props}
    />
  )
})

export default Input