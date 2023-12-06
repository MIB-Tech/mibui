import {FC} from 'react';
import {InputFieldGroupProps} from './InputField.types.ts';
import {FormGroupProps} from '../../../Forms/FormGroup/FormGroup.types.ts';
import {InputField} from './index.ts';
import {Field} from '../index.ts';

const InputFieldGroup: FC<InputFieldGroupProps> = ({name, slotProps, ...props}) => {
  const rootProps: FormGroupProps = {
    ...props,
    ...slotProps?.root,
  };

  return (
    <Field name={name} {...rootProps}>
      <InputField
        name={name}
        {...slotProps?.input}
      />
    </Field>
  );
};

export default InputFieldGroup;