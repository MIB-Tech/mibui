import {forwardRef} from 'react';
import {InputNumberProps} from './InputNumber.types.ts';
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid';
import {AdornmentIconButton} from '../InputGroup/AdornmentIconButton.tsx';
import {Input} from '../Input';
import {unstable_useNumberInput as useNumberInput} from '@mui/base';
import {unstable_useForkRef as useForkRef} from '@mui/utils';

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>((
  {
    size,
    shiftMultiplier,
    ...props
  },
  ref
) => {
  const {
    getIncrementButtonProps,
    getDecrementButtonProps,
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
      {...inputProps}
      {...getRootProps()}
      // ref={ref}
      size={size}
      startAdornment={
        <AdornmentIconButton
          size={size}
          iconElement={MinusIcon}
          {...getDecrementButtonProps()}
        />
      }
      endAdornment={
        <AdornmentIconButton
          size={size}
          iconElement={PlusIcon}
          {...getIncrementButtonProps()}
        />
      }
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