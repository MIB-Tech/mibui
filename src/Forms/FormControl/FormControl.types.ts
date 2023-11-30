import {FormControlProps as MuiFormControlProps} from '@mui/base';
import {HTMLAttributes} from 'react';

export type FormControlProps = MuiFormControlProps
export type LabelProps = Pick<HTMLAttributes<any>, 'className' | 'children'>
export type HelperTextProps = Pick<HTMLAttributes<any>, 'className' | 'children'>