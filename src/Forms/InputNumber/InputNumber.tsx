import {forwardRef, useImperativeHandle, useRef} from 'react';
import {InputNumberProps} from './InputNumber.types.ts';
import Input from '../Input/Input.tsx';
import {Button} from '../../Components';
import {ButtonVariant, SizeEnum} from '../../Components/Button/Button.types.tsx';
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid';
import {InputGroup} from '../InputGroup';
import {twMerge} from 'tailwind-merge';


const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(({...props}, ref) => {
  const {min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, value, step = 1} = props
  const internalRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => internalRef.current as HTMLInputElement, []);

  const changeable = (value: number) => {

    return value >= min && value <= max
  }

  return (
    <InputGroup
      leading={(
        <Button
          variant={ButtonVariant.Soft}
          size={SizeEnum.Small}
          icon
          disabled={!!value && changeable(value - step)}
          onClick={()=> internalRef.current?.stepUp()}
        >
          <MinusIcon className="w-4 h-4"/>
        </Button>
      )}
      trailing={(
        <Button
          variant={ButtonVariant.Soft}
          size={SizeEnum.Small}
          icon
          disabled={!!value && !changeable(value + step)}
          onClick={()=> internalRef.current?.stepUp()}
        >
          <PlusIcon className="w-4 h-4"/>
        </Button>
      )}
    >
      <Input
        className={twMerge(
          'ps-10 pe-10 w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
        )}
        {...props}
        type="number"
        ref={internalRef}
        value={value?.toFixed(1)}
      />
    </InputGroup>
  )
})

export default InputNumber