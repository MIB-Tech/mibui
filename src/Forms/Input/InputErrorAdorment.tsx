import {FC} from 'react';
import {ExclamationTriangleIcon} from '@heroicons/react/20/solid';
import {AdornmentIconButton} from '../InputGroup/AdornmentIconButton.tsx';
import {Tooltip} from '../../Components';
import {InputProps} from './Input.types.ts';
import {ErrorFeedback} from '../FormGroup';

const InputErrorAdornment: FC<Pick<InputProps, 'errorMessage'>> = ({errorMessage}) => errorMessage && (
  <Tooltip
    open
    content={<ErrorFeedback>{errorMessage}</ErrorFeedback>}
    placement='bottom-end'
    className='py-0.5'
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
