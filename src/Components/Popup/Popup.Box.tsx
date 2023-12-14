import {FC, forwardRef, HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';


const Box: FC<HTMLAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((
  {className, ...props}, ref) => (
  <div
    ref={ref}
    className={twMerge('z-10 rounded shadow-lg bg-white border', className)}
    {...props}
  />
))


export default Box;
