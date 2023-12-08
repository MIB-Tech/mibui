import {twMerge} from 'tailwind-merge';
import {forwardRef} from 'react';
import {HelperTextProps} from './FormGroup.types.ts';

const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({className, ...props}, ref) => (
    <p
      ref={ref}
      className={twMerge('text-sm text-gray-500', className)}
      {...props}
    />
  )
);

export default HelperText;