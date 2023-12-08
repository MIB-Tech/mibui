import {FC} from 'react';
import {InputFieldProps} from './InputField.types.ts';
import {Input} from '../../../Forms';
import {useField} from 'formik';

const InputField: FC<InputFieldProps> = ({name, ...props}) => {
  const [field, {error, touched}, {}] = useField({name});

  return (
    <Input
      {...props}
      {...field}
      errorMessage={touched && error}
    />
  );
};

export default InputField;