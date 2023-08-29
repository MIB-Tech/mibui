import {HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';

type AutocompleteOptionWrapperProps = HTMLAttributes<HTMLLIElement>
export const AutocompleteOptionWrapper = ({className, ...props}: AutocompleteOptionWrapperProps) => (
  <li
    {...props}
    className={twMerge('flex items-center py-1.5 px-2', className)}
  />
);