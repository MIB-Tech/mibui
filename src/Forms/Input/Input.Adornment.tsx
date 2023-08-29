import {FC, HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';

export const Adornment: FC<HTMLAttributes<HTMLDivElement>> = ({className, ...props}) => (
  <div
    className={twMerge(
      'flex items-center justify-center',
      className
    )}
    {...props}
  />
);