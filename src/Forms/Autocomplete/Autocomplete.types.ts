import {UseAutocompleteProps} from '@mui/base';
import {HTMLAttributes, ReactNode} from 'react';
import {InputProps} from '../Input/Input.types.ts';
import {UseAutocompleteReturnValue} from '@mui/base/useAutocomplete';

export type AutocompleteProps<
  Value,
  Multiple extends boolean | undefined = false
> = {
  searchDisabled?: boolean,
  renderOption?: (props: HTMLAttributes<HTMLLIElement>, option: Value) => ReactNode
  renderListbox?: (props: Pick<UseAutocompleteReturnValue<Value>, 'getListboxProps' | 'groupedOptions' | 'getOptionProps'>) => ReactNode
} & UseAutocompleteProps<Value, Multiple, false, false>
  & Pick<InputProps, 'placeholder' | 'size' | 'autoFocus' | 'errorMessage'>