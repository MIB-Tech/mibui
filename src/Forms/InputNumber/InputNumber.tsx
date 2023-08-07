import {forwardRef, useImperativeHandle, useMemo, useRef} from 'react';
import {InputNumberProps} from './InputNumber.types.ts';
import Input from '../Input/Input.tsx';
import {Button} from '../../Components';
import {ButtonVariant, SizeEnum} from '../../Components/Button/Button.types.tsx';
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid';
import {InputGroup} from '../InputGroup';
import {twMerge} from 'tailwind-merge';


const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(({...props}, ref) => {
  const {min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, value, step = 1, size} = props
  const internalRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => internalRef.current as HTMLInputElement, []);

  const changeable = (value: number) => {

    return value >= min && value <= max
  }

  const buttonClassName = useMemo<string>(() => {
    switch (size) {
      case SizeEnum.Small:
        return `mx-2 p-[0.5px]`
      case SizeEnum.Large:
        return `mx-4 p-[6px]`
      default:
        return `mx-3 p-[4px]`
    }
  }, [size])

  const inputClassName = useMemo<string>(() => {
    switch (size) {
      case SizeEnum.Small:
        return `px-6`
      case SizeEnum.Large:
        return `px-16`
      default:
        return `px-11`
    }
  }, [size])

  const iconClassName = useMemo<string>(() => {
    switch (size) {
      case SizeEnum.Small:
        return `w-3 h-3`
      case SizeEnum.Large:
        return `w-5 h-5`
      default:
        return `w-4 h-4`
    }
  }, [size])

  return (
    <InputGroup
      leading={(
        <Button
          variant={ButtonVariant.Soft}
          size={SizeEnum.Small}
          icon
          disabled={!!value && changeable(value - step)}
          onClick={()=> internalRef.current?.stepDown()}
          className={buttonClassName}
        >
          <MinusIcon className={iconClassName}/>
        </Button>
      )}
      trailing={(
        <Button
          variant={ButtonVariant.Soft}
          size={SizeEnum.Small}
          icon
          disabled={!!value && !changeable(value + step)}
          onClick={()=> internalRef.current?.stepUp()}
          className={buttonClassName}
        >
          <PlusIcon className={iconClassName}/>
        </Button>
      )}
    >
      <Input
        className={twMerge(
          'w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
          inputClassName
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