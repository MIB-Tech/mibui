import {SizingType} from '../../@types/Sizing.ts';
import {InputOwnProps} from '@mui/base/Input/Input.types';

export type UnstyledInputProps = {
  size?: SizingType
} & InputOwnProps

export type InputProps = UnstyledInputProps