import {forwardRef, ReactNode, useEffect, useState} from 'react';
import {useFormControlContext} from '@mui/base';
import HelperText from './FormControl.HelperText.tsx';

const ErrorFeedback = forwardRef<HTMLParagraphElement, {
  className?: string,
  children?: ReactNode
}>(
  ({className, ...props}, ref) => {
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = useState(false);

    useEffect(() => {
      if (formControlContext?.filled) {
        setDirty(true);
      }
    }, [formControlContext]);

    if (formControlContext === undefined) {
      return null;
    }

    const {required, filled} = formControlContext;
    const showRequiredError = dirty && required && !filled;

    if (!showRequiredError) {
      return <></>;
    }

    return (
      <HelperText
        ref={ref}
        {...props}
      />
    );
  },
);

export default ErrorFeedback;