import {AutocompleteFieldProps} from './AutocompleteField.types.ts';
import {Autocomplete} from '../../../Forms';
import {useField} from 'formik';
import {AutocompleteValue} from '@mui/base/useAutocomplete/useAutocomplete';

const AutocompleteField = <Value, Multiple extends boolean | undefined>(
  {name, ...props}: AutocompleteFieldProps<Value, Multiple>
) => {
  const [field, {error, touched}, {setValue}] = useField<AutocompleteValue<Value, Multiple, false, false>>({name});

  return (
    <Autocomplete
      {...props}
      errorMessage={touched && error}
      value={field.value}
      onChange={(event, value) => {
        field.onChange(event);
        setValue(value);
      }}
    />
  );
};

export default AutocompleteField;