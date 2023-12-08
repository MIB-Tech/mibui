import {FC} from 'react';
import {DatePickerFieldProps} from './DatePickerField.types.ts';
import {useField} from 'formik';
import DatePickerInput from "../../../Forms/DatePicker/DatePicker.Input.tsx";

const DatePickerField: FC<DatePickerFieldProps> = ({name, ...props}) => {
  const [field, {error, touched}, {}] = useField({name});

  return (
    <DatePickerInput
      {...props}
      {...field}
      errorMessage={touched && error}
    />
  );
};

export default DatePickerField;