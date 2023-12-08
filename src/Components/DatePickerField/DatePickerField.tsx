import {FC} from 'react';
import {DatePickerFieldProps} from './DatePickerField.types.ts';
import {useField} from 'formik';
import {DatePicker} from '../../Forms';

const DatePickerField: FC<DatePickerFieldProps> = ({name, ...props}) => {
  const [field, {error, touched}, {setValue}] = useField({name});

  return (
    <DatePicker
      {...props}
      {...field}
      value={field.value ? [field.value]: []}
      onChange={value=>{
        setValue(value[0])
      }}
      errorMessage={touched && error}
    />
  );
};

export default DatePickerField;