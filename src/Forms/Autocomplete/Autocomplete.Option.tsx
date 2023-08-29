import {twMerge} from 'tailwind-merge';
import {HTMLAttributes} from 'react';
import {AutocompleteOptionWrapper} from './Autocomplete.Option.Wrapper.tsx';

export type AutocompleteOptionProps = HTMLAttributes<HTMLLIElement>

export const AutocompleteOption = ({...props}: AutocompleteOptionProps) => (
  <AutocompleteOptionWrapper
    {...props}
    className={twMerge(
      'group',
      `[&.Mui-focused]:cursor-pointer [&.Mui-focused]:bg-gray-100`,
      'aria-selected:bg-gray-100 aria-selected:text-primary-500',
      props.className
    )}
  />
)

