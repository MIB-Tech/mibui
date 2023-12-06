import {HTMLAttributes} from 'react';

export type FormGroupProps = HTMLAttributes<HTMLDivElement>
export type LabelProps = Pick<HTMLAttributes<any>, 'className' | 'children'>
export type HelperTextProps = Pick<HTMLAttributes<any>, 'className' | 'children'>