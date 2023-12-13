import {twMerge} from 'tailwind-merge';
import {forwardRef, HTMLAttributes} from 'react';

type AutocompletePopperProps = HTMLAttributes<HTMLDivElement>

export const AutocompletePopper = forwardRef<HTMLDivElement, AutocompletePopperProps>((
  {className, ...props}: AutocompletePopperProps,
  ref
) => {

  return (
    <div
      ref={ref}
      {...props}
      className={twMerge(
        'absolute bottom-auto mt-1 overflow-auto bg-white box-border --min-w-[200px] --max-w-[320px] max-h-[300px] z-20 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
        className
      )}
    />
  );
});

