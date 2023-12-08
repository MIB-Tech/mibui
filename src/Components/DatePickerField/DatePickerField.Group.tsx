import {FC} from 'react';
import {DatePickerFieldGroupProps} from './DatePickerField.types.ts';
import {FormGroupProps} from '../../../Forms/FormGroup/FormGroup.types.ts';
import {Field} from '../index.ts';
import DatePickerField from "./DatePickerField.tsx";

const DatePickerFieldGroup: FC<DatePickerFieldGroupProps> = ({name, slotProps, ...props}) => {
  const rootProps: FormGroupProps = {
    ...props,
    ...slotProps?.root,
  };

  return (
    <Field name={name} {...rootProps}>
      <DatePickerField
        name={name}
        {...slotProps?.input}
      />
    </Field>
  );
};

export default DatePickerFieldGroup;