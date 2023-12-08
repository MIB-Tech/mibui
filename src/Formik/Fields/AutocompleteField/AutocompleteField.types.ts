import {FieldProps, FieldSlotProps, UseFieldProps} from '../Field.types.tsx';
import {AutocompleteProps} from '../../../Forms/Autocomplete/Autocomplete.types.ts';

export type AutocompleteFieldProps<Value, Multiple extends boolean | undefined> =
  AutocompleteProps<Value, Multiple>
  & UseFieldProps

export type AutocompleteFieldGroupProps<Value, Multiple extends boolean | undefined> = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
  }
} & FieldProps & AutocompleteProps<Value, Multiple>