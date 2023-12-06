import {InputProps} from '../../../Forms/Input/Input.types.ts';
import {FieldProps, UseFieldProps, FieldSlotProps} from '../Field.types.tsx';

export type InputFieldProps = InputProps & UseFieldProps

export type InputFieldGroupProps = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
    // input?: FieldSlotProps<InputFieldProps>
    input?: InputProps
  }
} & FieldProps