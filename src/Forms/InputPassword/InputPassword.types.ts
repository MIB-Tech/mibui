import {InputProps} from '../Input/Input.types.ts';

export type InputPasswordProps = Omit<InputProps, 'maxRows' | 'minRows' | 'multiline' | 'rows' | 'type'>