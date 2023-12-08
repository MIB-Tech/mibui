import {FC} from 'react';
import {InputNumber} from '../../../Forms';
import {useField} from 'formik';
import {InputNumberFieldProps} from "./InputNumberField.types.ts";

const InputNumberField: FC<InputNumberFieldProps> = ({name, ...props}) => {
  const [field, {error, touched}, {}] = useField({name});

  return (
    <InputNumber
      {...props}
      {...field}
      errorMessage={touched && error}
    />
  );
};

export default InputNumberField;