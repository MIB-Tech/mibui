import {SizingType} from '../../@types/Sizing.ts';
import {TextareaAutosizeProps} from 'react-textarea-autosize';

export type UnstyledTextareaProps = {
  resizable?: boolean
} &  TextareaAutosizeProps
export type InputProps = {
  size?: SizingType
} & Omit<UnstyledTextareaProps, 'size'>