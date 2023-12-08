import {FieldProps, FieldSlotProps, UseFieldProps} from '../Field.types.tsx';
import {InputPasswordProps} from '../../../Forms/InputPassword/InputPassword.types.ts';

export type InputPasswordFieldProps = InputPasswordProps & UseFieldProps

export type InputPasswordFieldGroupProps = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
    input?: FieldSlotProps<InputPasswordFieldProps>
  }
} & FieldProps