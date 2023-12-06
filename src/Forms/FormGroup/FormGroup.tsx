import {FC} from 'react';
import {FormGroupProps} from './FormGroup.types.ts';

const FormGroup: FC<FormGroupProps> = ({...props}) => <div {...props} />;

export default FormGroup;