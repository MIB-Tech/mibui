import {FC} from 'react';
import {DatePickerFieldProps} from './DatePickerField.types.ts';
import {useField} from 'formik';
import {DatePicker} from '../../Forms';
import moment, {MomentInput} from 'moment';

const DatePickerField: FC<DatePickerFieldProps> = ({name, ...props}) => {
  const [field, {error, touched}, {setValue}] = useField<MomentInput>({name});

  return (
    <DatePicker
      {...props}
      {...field}
      value={field.value ? [moment(field.value).toDate()] : []}
      onChange={async value => {
        await setValue(moment(value[0]));
      }}
      errorMessage={touched && error}
    />
  );
};

export default DatePickerField;