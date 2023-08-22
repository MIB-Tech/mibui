import {InputHTMLAttributes} from 'react';


import {SizingType} from '../../@types/Sizing.ts';

export type UnstyledInputProps = InputHTMLAttributes<HTMLInputElement>
export type InputProps = {
  size?: SizingType
} & Omit<UnstyledInputProps, 'size'>