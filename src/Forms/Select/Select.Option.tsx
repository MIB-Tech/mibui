import {OptionProps} from './Select.types.ts';
import {Option as MuiOption} from '@mui/base';
import {ElementType} from 'react';
import {twMerge} from 'tailwind-merge';
import {ButtonSlot} from '../../Components/Menu/Menu.Button.tsx';

export const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === 'function' ? fn(args) : fn;

const Option = <
  OptionValue extends {},
  RootComponentType extends ElementType
>({className, ...props}: OptionProps<OptionValue, RootComponentType>) => (
  <MuiOption
    {...props}
    slots={{
      root: ButtonSlot
    }}
    variant='clean'
    color={props.active ? 'primary' : 'secondary'}
    // slotProps={{
    //   root: ownerState => {
    //     const resolvedSlotProps = resolveSlotProps(
    //       props.slotProps?.root,
    //       ownerState,
    //     );
    //
    //     return {
    //       ...resolvedSlotProps,
    //       className: twMerge(
    //         '',
    //         resolvedSlotProps?.className
    //       )
    //     }
    //   }
    // }}
    className={twMerge(
      `flex w-full text-start rounded-none truncate first:rounded-t last:rounded-b`,
      // !props.disabled && `hover:${activeClassName}`,
      // props.active && activeClassName,
      className
    )}
  />
);

export default Option;