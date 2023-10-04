import {forwardRef} from 'react';
import {CardProps} from './Card.types.tsx';
import {twMerge} from 'tailwind-merge';

const Card = forwardRef<HTMLDivElement, CardProps>((
  {header, footer, children, className, ...props},
  ref
) => {

  return (
    <div
      ref={ref}
      {...props}
      className={twMerge('bg-white grid gap-y-4 border border-gray-200 rounded p-4', className)}
    >
      {header && <div>{header}</div>}
      {children}
      {footer && <div className='mt-auto'>{footer}</div>}
    </div>
  )
})

export default Card