import {forwardRef} from 'react';
import {twMerge} from 'tailwind-merge';
import {LabelProps} from './FormGroup.types.ts';

const Label = forwardRef<HTMLLabelElement, LabelProps>(({className, ...props}, ref) => {

  return (
    <label
      ref={ref}
      className={twMerge(
        'block text-sm font-medium leading-6 text-gray-900 mb-0.5',
        className
      )}
      {...props}
    />
  );
});

export default Label;