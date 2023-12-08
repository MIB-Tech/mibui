import {FieldProps, FieldSlotProps, UseFieldProps} from "../../Formik/Fields/Field.types.tsx";
import {InputProps} from "../../Forms/Input/Input.types.ts";

export type DatePickerFieldProps = InputProps & UseFieldProps

export type DatePickerFieldGroupProps = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
    // input?: FieldSlotProps<InputFieldProps>
    input?: InputProps
  }
} & FieldProps