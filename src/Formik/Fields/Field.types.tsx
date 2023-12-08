import {FieldConfig} from 'formik/dist/Field';
import {FormGroupProps, LabelProps} from '../../Forms/FormGroup/FormGroup.types.ts';
import {TransProps} from 'react-i18next';

export type UseFieldProps = Pick<FieldConfig, 'name'>
export type FieldSlotProps<T extends UseFieldProps> = Omit<T, 'name'>

export type FieldProps = {
  slotProps?: {
    root?: FormGroupProps
    label?: LabelProps
  }
} & UseFieldProps & Pick<TransProps<any>, 'i18nKey'> & FormGroupProps