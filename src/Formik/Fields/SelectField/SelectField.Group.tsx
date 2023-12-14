import {SelectFieldGroupProps} from './SelectField.types.ts';
import {SelectField} from './index.ts';
import {Field} from '../index.ts';

const SelectFieldGroup = <Value  extends {}, Multiple extends boolean> (
  {name, slotProps, ...props}: SelectFieldGroupProps<Value, Multiple>
) => {

  return (
    <Field name={name} {...slotProps?.root}>
      <SelectField
        name={name}
        {...props}
      />
    </Field>
  );
};

export default SelectFieldGroup;