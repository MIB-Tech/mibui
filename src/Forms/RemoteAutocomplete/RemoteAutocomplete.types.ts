import {AutocompleteProps} from '../Autocomplete/Autocomplete.types.ts';

export type RemoteAutocompleteProps<
  ResponseData,
  Value,
  Multiple extends boolean | undefined = false
> = {
  endpoint: string
  getOptions: (response: ResponseData) => ReadonlyArray<Value>
} & Omit<AutocompleteProps<Value, Multiple>, 'options'>