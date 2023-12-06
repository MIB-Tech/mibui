import {forwardRef} from 'react';
import {InputProps} from './Input.types.ts';
import {UnstyledInput} from './index.ts';
import {twMerge} from 'tailwind-merge';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';
import {AdornmentIconButton} from '../InputGroup/AdornmentIconButton.tsx';
import {ExclamationTriangleIcon} from '@heroicons/react/20/solid';
import {Tooltip} from '../../Components';


const Input = forwardRef<HTMLInputElement, InputProps>((
  {className, error, errorMessage, ...props},
  ref
) => {
  const inputStyles = useInputStyles();

  return (
    <UnstyledInput
      error={error || !!errorMessage}
      endAdornment={errorMessage && (
        <Tooltip
          open
          content={errorMessage}
          placement='top-end'
          className='text-error-500'
        >
          <div>
            <AdornmentIconButton
              color='error'
              iconElement={ExclamationTriangleIcon}
            />
          </div>
        </Tooltip>
      )}
      {...props}
      ref={ref}
      className={twMerge(inputStyles.className, className)}

    />
  );
});

export default Input;