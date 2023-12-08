import {FC} from 'react';
import {ExclamationTriangleIcon} from '@heroicons/react/20/solid';
import {AdornmentIconButton} from '../InputGroup/AdornmentIconButton.tsx';
import {Tooltip} from '../../Components';
import {InputProps} from './Input.types.ts';

const InputErrorAdornment: FC<Pick<InputProps, 'errorMessage'>> = ({errorMessage}) => errorMessage && (
  <Tooltip
    open
    content={errorMessage}
    placement='bottom-end'
    className='text-error-500 py-0.5'
  >
    <div>
      <AdornmentIconButton
        color='error'
        iconElement={ExclamationTriangleIcon}
      />
    </div>
  </Tooltip>
);

export default InputErrorAdornment;
