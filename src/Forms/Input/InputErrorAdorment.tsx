import  { forwardRef } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { AdornmentIconButton } from '../InputGroup/AdornmentIconButton.tsx';
import { unstable_useNumberInput as useNumberInput } from '@mui/base';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import { Tooltip } from '../../Components';
import { InputNumberProps } from '../InputNumber/InputNumber.types.ts';

const InputErrorAdornment = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
  const {

    getInputProps,
  } = useNumberInput({
    ...props
  });

  const inputProps = getInputProps();
  inputProps.ref = useForkRef(inputProps.ref, ref);

  return (
    <>

      {props.errorMessage && (
        <Tooltip
          open
          content={props.errorMessage}
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
    </>
  );
});

export default InputErrorAdornment;
