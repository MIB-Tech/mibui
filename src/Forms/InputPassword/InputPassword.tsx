import {forwardRef, useState} from 'react';
import {InputPasswordProps} from './InputPassword.types.ts';
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/20/solid';
import {AdornmentIconButton} from '../InputGroup/AdornmentIconButton.tsx';
import {Input} from '../Input';


const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(({...props}, ref) => {
  const [show, setShow] = useState<boolean>()

  return (
    <Input
      {...props}
      ref={ref}
      type={show ? 'text' : 'password'}
      endAdornment={(
        <AdornmentIconButton
          size={props.size}
          onClick={() => setShow(!show)}
          iconElement={show ? EyeIcon : EyeSlashIcon}
        />
      )}
    />
  )
})

export default InputPassword