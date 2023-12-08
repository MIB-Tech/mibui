import {FC} from 'react';
import {DatePickerFieldGroupProps} from './DatePickerField.types.ts';
import DatePickerField from './DatePickerField.tsx';
import {Field} from '../../Formik';

const DatePickerFieldGroup: FC<DatePickerFieldGroupProps> = ({name, slotProps, ...props}) => (
  <Field
    name={name}
    {...slotProps?.root}
  >
    <DatePickerField name={name} {...props}/>
  </Field>
)
export default DatePickerFieldGroup;