import {forwardRef, useMemo} from 'react';
import {twMerge} from 'tailwind-merge';
import Input from '../Input/Input.tsx';
import {InputGroupInputProps} from './InputGroup.types.ts';

export const InputGroupInput = forwardRef<
  HTMLInputElement,
  InputGroupInputProps
>(({className, leading, trailing, ...props}, ref) => {
  const {size} = props;

  const leadingInputClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `ps-6`;
      case 'lg':
        return `ps-16`;
      default:
        return `ps-11`;
    }
  }, [size]);

  const trailingInputClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `pe-6`;
      case 'lg':
        return `pe-16`;
      default:
        return `pe-11`;
    }
  }, [size]);

  return (
    <Input
      className={twMerge(
        leading && leadingInputClassName,
        trailing && trailingInputClassName,
        className
      )}
      {...props}
      ref={ref}
    />
  );
});