import {DefaultComponent, SelectProps} from './Select.types.ts';
import {prepareForSlot, Select as MuiSelect} from '@mui/base';
import {ElementType} from 'react';
import {PopupBox} from '../../Components';
import {InputRootSlot} from '../Input';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';
import {twMerge} from 'tailwind-merge';
import {resolveSlotProps} from './Select.Option.tsx';

// const resolveSlotProps = (fn: any, args: any) => typeof fn === 'function' ? fn(args) : fn;
// export const PopupBoxSlot = prepareForSlot(PopupBox);
// let size: SizingType | undefined = undefined;
const Select = <
  OptionValue extends {},
  Multiple extends boolean,
  RootComponentType extends ElementType = DefaultComponent<OptionValue, Multiple>
>({className, slots, ...props}: SelectProps<OptionValue, Multiple, RootComponentType>) => {
  const inputStyles = useInputStyles();

  return (
    <MuiSelect
      {...props}
      listboxOpen={(props.disabled || props.readOnly) ? false: undefined}
      slots={{
        root: InputRootSlot,
        listbox: prepareForSlot(PopupBox),
        ...props.slots,
      }}
      slotProps={{
        ...slots,
        listbox: ownerState => {
          const resolvedSlotProps = resolveSlotProps(slots?.listbox, ownerState);

          return {
            ...resolvedSlotProps,
            className: twMerge(
              'my-1 overflow-hidden',
              resolvedSlotProps?.className
            )
          };
        },
        root: ownerState => {
          const resolvedSlotProps = resolveSlotProps(slots?.root, ownerState);

          return {
            ...resolvedSlotProps,
            className: twMerge(
              props.error && 'Mui-error',
              inputStyles.className,
              resolvedSlotProps?.className,
              className
            )
          };
        },
      }}
    />
  )
};

export default Select;