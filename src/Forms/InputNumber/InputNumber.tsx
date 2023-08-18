import {forwardRef, useImperativeHandle, useRef} from 'react';
import {InputNumberProps} from './InputNumber.types.ts';
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid';
import {InputGroupIconButton} from '../InputGroup/InputGroup.IconButton.tsx';
import {Input} from '../Input';


const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(({...props}, ref) => {
  const {min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, value, step = 1, size} = props
  const internalRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => internalRef.current as HTMLInputElement, []);

  const changeable = (value: number) => {

    return value >= min && value <= max
  }

  return (
    <div className="flex items-center">
      <InputGroupIconButton
        size={size}
        disabled={!!value && changeable(value - step)}
        onClick={() => internalRef.current?.stepDown()}
        iconElement={MinusIcon}
      />
      <Input
        className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        {...props}
        type="number"
        ref={internalRef}
        value={value?.toFixed(1)}
      />
      <InputGroupIconButton
        size={size}
        disabled={!!value && changeable(value + step)}
        onClick={() => internalRef.current?.stepUp()}
        iconElement={PlusIcon}
      />
    </div>
  )
})

export default InputNumber