import {InputHTMLAttributes} from 'react';
import {SizeEnum} from '../../Components/Button/Button.types.tsx';

export type UnstyledInputProps = InputHTMLAttributes<HTMLInputElement>
export type InputProps = {
  size?: SizeEnum
} & Omit<UnstyledInputProps, 'size'>