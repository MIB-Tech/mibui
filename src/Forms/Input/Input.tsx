import {forwardRef} from 'react';
import {InputProps} from './Input.types.ts';
import {UnstyledInput} from './index.ts';
import {twMerge} from 'tailwind-merge';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';
import {AdornmentIconButton} from '../InputGroup/AdornmentIconButton.tsx';
import {ExclamationTriangleIcon} from '@heroicons/react/20/solid';
import {Tooltip} from '../../Components';


const Input = forwardRef<HTMLInputElement, InputProps>((
  {className, error, errorMessage, endAdornment,  ...props},
  ref
) => {
  const inputStyles = useInputStyles();

  return (
    <UnstyledInput
      error={error || !!errorMessage}
      {...props}
      ref={ref}
      className={twMerge(inputStyles.className, className)}
      endAdornment={(
        <div className='flex gap-1 ms-auto'>
          {endAdornment}
          {errorMessage && (
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
        </div>
      )}
    />
  );
});

export default Input;