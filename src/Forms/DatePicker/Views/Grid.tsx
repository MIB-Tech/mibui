import {FC, HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';

const CalendarGrid:FC<HTMLAttributes<HTMLDivElement>> = ({className, ...props}) => (
  <div
    className={twMerge('grid items-center gap-1', className)}
    {...props}
  />
)

export default CalendarGrid