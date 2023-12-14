import {forwardRef, ReactNode} from 'react';
import HelperText from './FormGroup.HelperText.tsx';
import {twMerge} from 'tailwind-merge';

const ErrorFeedback = forwardRef<HTMLParagraphElement, {
  className?: string,
  children?: ReactNode
}>(
  ({className, ...props}, ref) => (
    <HelperText
      ref={ref}
      {...props}
      className={twMerge(className,  'text-error-500')}
    />
  )
);

export default ErrorFeedback;