import {forwardRef} from 'react';
import {InputProps} from './Textarea.types.ts';
import {UnstyledTextarea} from './index.ts';
import {twMerge} from 'tailwind-merge';
import {useSizing} from '../../hooks/UseSizing.ts';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';


const Textarea = forwardRef<HTMLTextAreaElement, InputProps>(({className, size, ...props}, ref) => {
  const sizing = useSizing(size);
  const inputStyles = useInputStyles(props);

  return (
    <UnstyledTextarea
      ref={ref}
      className={twMerge(
        inputStyles.className,
        sizing.padding,
        sizing.text,
        className
      )}
      {...props}
    />
  );
});

export default Textarea;