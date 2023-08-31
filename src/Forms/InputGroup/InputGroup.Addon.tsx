import {FC, HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';

const InputGroupAddon: FC<HTMLAttributes<HTMLSpanElement>> = ({className, ...props}) => (
  <span
    className={twMerge(
      'inline-flex items-center px-3 bg-white text-gray-500 border-y first:border-l last:border-r border-gray-300',
      className
    )}
    {...props}
  />
);

export default InputGroupAddon;