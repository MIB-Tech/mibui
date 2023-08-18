import {forwardRef, useState} from 'react';
import {InputPasswordProps} from './InputPassword.types.ts';
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/20/solid';
import {InputGroupIconButton} from '../InputGroup/InputGroup.IconButton.tsx';
import {Input} from '../Input';


const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(({...props}, ref) => {
  const {size} = props
  const [show, setShow] = useState<boolean>()

  return (
    <div className="flex items-center">
      <Input
        {...props}
        type={show ? 'text' : 'password'}
        ref={ref}
      />
      <InputGroupIconButton
        size={size}
        onClick={() => setShow(!show)}
        iconElement={show ? EyeIcon : EyeSlashIcon}
      />
    </div>
  )
})

export default InputPassword