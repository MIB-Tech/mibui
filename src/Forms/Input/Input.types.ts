import {SizingType} from '../../@types/Sizing.ts';
import {InputOwnProps} from '@mui/base/Input/Input.types';
import {ReactNode} from 'react';
import {HTMLAttributes} from 'react';

export type UnstyledInputProps = {
  size?: SizingType
} & InputOwnProps

export type InputRootProps = HTMLAttributes<HTMLDivElement> & Pick<UnstyledInputProps, 'size'>
export type InputProps = {
  errorMessage?: ReactNode
} & UnstyledInputProps