import {forwardRef, useEffect, useState} from 'react';
import {useFormControlContext} from '@mui/base';
import {twMerge} from 'tailwind-merge';
import {LabelProps} from './FormControl.types.ts';

const Label = forwardRef<HTMLLabelElement, LabelProps>(({className, children}, ref) => {
  const context = useFormControlContext();
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (context?.filled) {
      setDirty(true);
    }
  }, [context]);

  return (
    <label
      ref={ref}
      className={twMerge(
        'block text-sm font-medium leading-6 text-gray-900 mb-0.5',
        className,
        (context?.error || (dirty && context?.required && !context.filled)) && 'invalid text-error-500',
      )}
    >
      {children}
      {context?.required ? ' *' : ''}
    </label>
  );
});

export default Label;