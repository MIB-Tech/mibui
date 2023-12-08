import {FC} from 'react';
import {DatePickerFieldGroupProps} from './DatePickerField.types.ts';
import DatePickerField from "./DatePickerField.tsx";
import Field from "../../Formik/Fields/Field.tsx";
import {FormGroupProps} from "../../Forms/FormGroup/FormGroup.types.ts";

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