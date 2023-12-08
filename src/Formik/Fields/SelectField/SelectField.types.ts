import {FieldProps, FieldSlotProps, UseFieldProps} from '../Field.types.tsx';
import {SelectProps} from '../../../Forms/Select/Select.types.ts';

export type SelectFieldProps<Value, Multiple extends boolean | undefined = false> =
  SelectProps<Value, Multiple>
  & UseFieldProps

export type SelectFieldGroupProps<Value, Multiple extends boolean | undefined = false> = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
  }
} & FieldProps & SelectProps<Value, Multiple>