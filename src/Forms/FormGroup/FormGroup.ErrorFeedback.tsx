import {forwardRef, ReactNode} from 'react';
import HelperText from './FormGroup.HelperText.tsx';

const ErrorFeedback = forwardRef<HTMLParagraphElement, {
  className?: string,
  children?: ReactNode
}>(
  ({className, ...props}, ref) => {
    
    return (
      <HelperText
        ref={ref}
        {...props}
      />
    );
  },
);

export default ErrorFeedback;