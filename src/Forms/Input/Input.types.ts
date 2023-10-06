import {SizingType} from '../../@types/Sizing.ts';
import {InputOwnProps} from '@mui/base/Input/Input.types';
import {HTMLAttributes} from 'react';

export type UnstyledInputProps = {
  size?: SizingType
} & InputOwnProps

export type InputProps = UnstyledInputProps
export type InputRootProps = HTMLAttributes<HTMLDivElement> & Pick<UnstyledInputProps, 'size'>