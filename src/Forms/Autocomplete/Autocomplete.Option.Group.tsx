import {AutocompleteGroupedOption} from '@mui/base/useAutocomplete/useAutocomplete';
import {twMerge} from 'tailwind-merge';
import {HTMLAttributes} from 'react';

type AutocompleteOptionProps<Value> = {
  option: AutocompleteGroupedOption<Value>
} & HTMLAttributes<HTMLLIElement>

export const AutocompleteGroupOption = <Value, >({option, ...props}: AutocompleteOptionProps<Value>) => (
  <li
    {...props}
    className={twMerge(
      'sticky top-0 ps-3 py-2 backdrop-blur-sm bg-gray-50/30 ring-1 ring-slate-900/10 overflow-hidden',
      props.className
    )}
  >
    {option.group}
  </li>
);