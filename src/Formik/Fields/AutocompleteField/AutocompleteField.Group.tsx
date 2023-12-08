import {AutocompleteFieldGroupProps} from './AutocompleteField.types.ts';
import {AutocompleteField} from './index.ts';
import {Field} from '../index.ts';

const AutocompleteFieldGroup = <Value, Multiple extends boolean | undefined>(
  {name, slotProps, ...props}: AutocompleteFieldGroupProps<Value, Multiple>
) => {

  return (
    <Field name={name} {...slotProps?.root}>
      <AutocompleteField
        name={name}
        {...props}
      />
    </Field>
  );
};

export default AutocompleteFieldGroup;