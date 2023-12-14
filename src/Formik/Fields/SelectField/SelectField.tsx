import {SelectFieldProps} from './SelectField.types.ts';
import {Select} from '../../../Forms';
import {useField} from 'formik';

const SelectField = <Value  extends {}, Multiple extends boolean>(
  {name, ...props}: SelectFieldProps<Value, Multiple>
) => {
  const [field, {error, touched}, {setValue}] = useField({name});

  return (
    <Select
      {...props}
      errorMessage={touched && error}
      value={field.value}
      onChange={async (event, value) => {
        field.onChange(event);
        await setValue(value);
      }}
    />
  );
};

export default SelectField;