import {FieldProps, FieldSlotProps, UseFieldProps} from '../Field.types.tsx';
import {InputNumberProps} from "../../../Forms/InputNumber/InputNumber.types.ts";

export type InputNumberFieldProps = InputNumberProps & UseFieldProps

export type InputNumberFieldGroupProps = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
    input?: FieldSlotProps<InputNumberFieldProps>
  }
} & FieldProps