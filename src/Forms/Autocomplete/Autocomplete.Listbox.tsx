import {forwardRef, HTMLAttributes} from 'react';

type AutocompletePopperProps = HTMLAttributes<HTMLUListElement>

export const AutocompleteListbox = forwardRef<HTMLUListElement, AutocompletePopperProps>((
  {...props}: AutocompletePopperProps,
  ref
) => {

  return (
    <ul
      ref={ref}
      {...props}
    />
  );
});

