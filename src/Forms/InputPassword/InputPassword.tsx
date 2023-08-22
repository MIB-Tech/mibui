import {forwardRef, useMemo, useState} from 'react';
import {InputPasswordProps} from './InputPassword.types.ts';
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/20/solid';
import {InputGroupIconButton} from '../InputGroup/InputGroup.IconButton.tsx';
import {Input} from '../Input';
import {twMerge} from 'tailwind-merge';


const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(({...props}, ref) => {
  const {size} = props
  const [show, setShow] = useState<boolean>()

  const spacingClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return 'pe-7';
      case 'lg':
        return 'pe-11';
      default:
        return 'pe-9';
    }
  }, [size]);

  return (
    <div className='relative'>
      <Input
        {...props}
        type={show ? 'text' : 'password'}
        ref={ref}
        className={twMerge(
          props.className,
          spacingClassName
        )}
      />
      <div className='absolute inset-y-0 right-0'>
        <InputGroupIconButton
          size={size}
          onClick={() => setShow(!show)}
          iconElement={show ? EyeIcon : EyeSlashIcon}
        />
      </div>
    </div>
  )
})

export default InputPassword