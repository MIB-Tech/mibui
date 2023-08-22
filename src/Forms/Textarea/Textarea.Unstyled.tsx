import {forwardRef} from 'react';
import {UnstyledTextareaProps} from './Textarea.types.ts';
import {twMerge} from 'tailwind-merge';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';
import TextareaAutosize from 'react-textarea-autosize';

const UnstyledInput = forwardRef<HTMLTextAreaElement, UnstyledTextareaProps>((
  {
    className,
    minRows = 3,
    resizable,
    ...props
  }, ref
) => {
  const inputStyles = useInputStyles(props);

  return (
    <TextareaAutosize
      ref={ref}
      className={twMerge(
        inputStyles.unstyled,
        className,
        !resizable && 'resize-none'
      )}
      {...props}
      minRows={minRows}
    />
  );
});

export default UnstyledInput;