import {forwardRef} from 'react';
import {InputNumberProps} from './InputNumber.types.ts';
import {Input} from '../Input';
import {unstable_useNumberInput as useNumberInput} from '@mui/base';
import {unstable_useForkRef as useForkRef} from '@mui/utils';
import InputErrorAdornment from "../Input/InputErrorAdorment.tsx";

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>((
  {
    size,
    shiftMultiplier,
    autoFocus,
    errorMessage,
    ...props
  },
  ref
) => {
  const {

    getInputProps,
    getRootProps
  } = useNumberInput({
    shiftMultiplier,
    ...props
  });

  const inputProps = getInputProps();
  inputProps.ref = useForkRef(inputProps.ref, ref);

  return (
    <Input
      //{...props}
      autoFocus={autoFocus}
      {...inputProps}
      {...getRootProps()}
      // ref={ref}
      size={size}
      startAdornment={
        <InputErrorAdornment errorMessage={errorMessage} />
      }
      endAdornment={<InputErrorAdornment errorMessage={errorMessage} />}

    />

);
  // return (
  //   <div className='relative' {...getRootProps()}>
  //     <div className='absolute inset-y-0 left-0'>
  //       <InputGroupIconButton
  //         size={size}
  //         iconElement={MinusIcon}
  //         {...getDecrementButtonProps()}
  //       />
  //     </div>
  //     <Input
  //       ref={ref}
  //       className={twMerge(
  //         spacingClassName
  //       )}
  //       type='number'
  //       {...getInputProps()}
  //     />
  //     <div className='absolute inset-y-0 right-0'>
  //       <InputGroupIconButton
  //         size={size}
  //         iconElement={PlusIcon}
  //         {...getIncrementButtonProps()}
  //       />
  //     </div>
  //   </div>
  // )
});

export default InputNumber;