import {FC} from 'react';
import {InputPasswordFieldProps} from './InputPasswordField.types.ts';
import {InputPassword} from '../../../Forms';
import {useField} from 'formik';

const InputPasswordField: FC<InputPasswordFieldProps> = ({name, ...props}) => {
  const [field, {error, touched}, {}] = useField({name});

  return (
    <InputPassword
      {...props}
      {...field}
      errorMessage={touched && error}
    />
  );
};

export default InputPasswordField;