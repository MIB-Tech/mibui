import {FC} from 'react';
import {FormGroup, Label} from '../../Forms';
import {Trans} from 'react-i18next';
import {FieldProps} from './Field.types.tsx';

const Field: FC<FieldProps> = ({name, i18nKey, slotProps, children, ...props}) => {
  // const [, {error}] = useField({name});

  return (
    <FormGroup {...slotProps?.root} {...props}>
      <Label {...slotProps?.label}>
        {slotProps?.label?.children || <Trans i18nKey={i18nKey || name.toUpperCase()}/>}
      </Label>
      {children}
    </FormGroup>
  );
};

export default Field;