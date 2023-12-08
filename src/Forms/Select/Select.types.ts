import {AutocompleteProps} from '../Autocomplete/Autocomplete.types.ts';

export type SelectProps<Value, Multiple extends boolean | undefined = false> = AutocompleteProps<Value, Multiple>