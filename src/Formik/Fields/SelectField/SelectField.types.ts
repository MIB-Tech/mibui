import {FieldProps, FieldSlotProps, UseFieldProps} from '../Field.types.tsx';
import {SelectProps} from '../../../Forms/Select/Select.types.ts';

export type SelectFieldProps<Value  extends {}, Multiple extends boolean> =
  SelectProps<Value, Multiple>
  & UseFieldProps

export type SelectFieldGroupProps<Value  extends {}, Multiple extends boolean> = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
  }
} & FieldProps & SelectProps<Value, Multiple>