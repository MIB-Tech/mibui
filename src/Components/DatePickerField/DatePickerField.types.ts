import {DatePickerProps} from '../../Forms/DatePicker/DatePicker.types.ts';
import {FieldProps, FieldSlotProps, UseFieldProps} from '../../Formik/Fields/Field.types.tsx';

export type DatePickerFieldProps = Omit<DatePickerProps, 'value' | 'onChange'> & UseFieldProps

export type DatePickerFieldGroupProps = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
  }
} & DatePickerFieldProps & FieldProps