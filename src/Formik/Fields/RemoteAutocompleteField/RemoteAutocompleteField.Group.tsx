import {RemoteAutocompleteField} from './index.ts';
import {Field} from '../index.ts';
import {RemoteAutocompleteFieldGroupProps} from './RemoteAutocompleteField.types.ts';

const RemoteAutocompleteFieldGroup = <ResponseData, Value, Multiple extends boolean | undefined = false>(
  {name, slotProps, ...props}: RemoteAutocompleteFieldGroupProps<ResponseData, Value, Multiple>
) => {

  return (
    <Field name={name} {...slotProps?.root}>
      <RemoteAutocompleteField
        name={name}
        {...props}
      />
    </Field>
  );
};

export default RemoteAutocompleteFieldGroup;