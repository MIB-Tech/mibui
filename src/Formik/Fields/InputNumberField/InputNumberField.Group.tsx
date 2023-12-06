import {FC} from 'react';
import {InputPasswordFieldGroupProps} from './InputPasswordField.types.ts';
import {FormGroupProps} from '../../../Forms/FormGroup/FormGroup.types.ts';
import {InputPasswordField} from './index.ts';
import {Field} from '../index.ts';

const InputPasswordFieldGroup: FC<InputPasswordFieldGroupProps> = ({name, slotProps, ...props}) => {
  const rootProps: FormGroupProps = {
    ...props,
    ...slotProps?.root,
  };
  const inputProps = slotProps?.input;

  return (
    <Field name={name} {...rootProps}>
      <InputPasswordField name={name} {...inputProps} />
    </Field>
  );
};

export default InputPasswordFieldGroup;