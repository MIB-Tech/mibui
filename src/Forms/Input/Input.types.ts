import {SizingType} from '../../@types/Sizing.ts';
import {InputOwnProps} from '@mui/base/Input/Input.types';
import {ReactNode} from 'react';

export type UnstyledInputProps = {
  size?: SizingType
} & InputOwnProps

export type InputProps = {
  errorMessage?: ReactNode
} & UnstyledInputProps