import {InputProps} from '../Input/Input.types.ts';
import {UseNumberInputParameters} from '@mui/base';

export type InputNumberProps =
  Omit<InputProps, 'onChange' | 'maxRows' | 'minRows' | 'multiline' | 'rows' | 'type'>
  & UseNumberInputParameters