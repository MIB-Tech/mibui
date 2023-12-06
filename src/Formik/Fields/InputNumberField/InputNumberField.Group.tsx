import {FC} from 'react';
import {FormGroupProps} from '../../../Forms/FormGroup/FormGroup.types.ts';
import {Field} from '../index.ts';
import InputNumberField from "./InputNumberField.tsx";
import {InputNumberFieldGroupProps} from "./InputNumberField.types.ts";

const InputNumberFieldGroup: FC<InputNumberFieldGroupProps> = ({name, slotProps, ...props}) => {
  const rootProps: FormGroupProps = {
    ...props,
    ...slotProps?.root,
  };
  const inputProps = slotProps?.input;

  return (
    <Field name={name} {...rootProps}>
      <InputNumberField name={name} {...inputProps} />
    </Field>
  );
};

export default InputNumberFieldGroup;