import {forwardRef, useImperativeHandle, useMemo, useRef} from 'react';
import {InputNumberProps} from './InputNumber.types.ts';
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid';
import {InputGroupIconButton} from '../InputGroup/InputGroup.IconButton.tsx';
import {Input} from '../Input';
import {twMerge} from 'tailwind-merge';


const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(({...props}, ref) => {
  const {
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    value,
    step = 1,
    size
  } = props;
  const internalRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => internalRef.current as HTMLInputElement, []);

  const changeable = (value: number) => {
    return value >= min && value <= max;
  };

  const spacingClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return 'px-7';
      case 'lg':
        return 'px-11';
      default:
        return 'px-9';
    }
  }, [size]);

  return (
    <div className='relative'>
      <div className='absolute inset-y-0 left-0'>
        <InputGroupIconButton
          size={size}
          disabled={!!value && changeable(value - step)}
          onClick={() => internalRef.current?.stepDown()}
          iconElement={MinusIcon}
        />
      </div>
      <Input
        className={twMerge(
          '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
          spacingClassName
        )}
        {...props}
        type='number'
        ref={internalRef}
        value={value?.toFixed(1)}
      />
      <div className='absolute inset-y-0 right-0'>
        <InputGroupIconButton
          size={size}
          disabled={!!value && changeable(value + step)}
          onClick={() => internalRef.current?.stepUp()}
          iconElement={PlusIcon}
        />
      </div>
    </div>
  )
})

export default InputNumber