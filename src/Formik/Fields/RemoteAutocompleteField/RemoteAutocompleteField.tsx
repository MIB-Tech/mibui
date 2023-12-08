import {RemoteAutocompleteFieldProps} from './RemoteAutocompleteField.types.ts';
import {RemoteAutocomplete} from '../../../Forms';
import {useField} from 'formik';
import {AutocompleteValue} from '@mui/base/useAutocomplete/useAutocomplete';

const RemoteAutocompleteField = <ResponseData, Value, Multiple extends boolean | undefined>(
  {name, ...props}: RemoteAutocompleteFieldProps<ResponseData, Value, Multiple>
) => {
  const [{multiple, ...field}, {error, touched}, {setValue}] = useField<AutocompleteValue<Value, Multiple, false, false>>({name});

  return (
    <RemoteAutocomplete
      {...props}
      {...field}
      errorMessage={touched && error}
      onChange={(event, value) => {
        field.onChange(event);
        setValue(value);
      }}
    />
  );
};

export default RemoteAutocompleteField;