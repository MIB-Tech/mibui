import {FC} from 'react';
import {FormGroup, Label} from '../../Forms';
import {Trans} from 'react-i18next';
import {FieldProps} from './Field.types.tsx';
import {stringToI18nKey} from '../../modules/utils.ts';

const Field: FC<FieldProps> = ({name, i18nKey, slotProps, children, ...props}) => (
  <FormGroup {...slotProps?.root} {...props}>
    <Label {...slotProps?.label}>
      {slotProps?.label?.children || <Trans i18nKey={i18nKey || stringToI18nKey(name)}/>}
    </Label>
    {children}
  </FormGroup>
)

export default Field;