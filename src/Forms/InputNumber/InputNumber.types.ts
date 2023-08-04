import {InputProps} from '../Input/Input.types.ts';

export type InputNumberProps = {
  min?: number,
  max?: number,
  step?: number,
  precision?: number
  value?: number
} & Omit<InputProps, 'min' | 'max' | 'step' | 'value'>