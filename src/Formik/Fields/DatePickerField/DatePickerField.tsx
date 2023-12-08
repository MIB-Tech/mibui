import { FC } from 'react';
import { useField } from 'formik';
import DatePickerInput from "../../../Forms/DatePicker/DatePicker.Input.tsx";
import InputErrorAdornment from "../../../Forms/Input/InputErrorAdorment.tsx";

type DatePickerFieldProps = {
  name: string;
};

const DatePickerField: FC<DatePickerFieldProps> = ({ name, ...props }) => {
  const [field, { error, touched }] = useField({ name });

  return (
    <div>
      <DatePickerInput
        {...props}
        {...field}
        errorMessage='zz'
      />
      {touched && error && <InputErrorAdornment errorMessage={error}/>}

    </div>

  );
};


export default DatePickerField;