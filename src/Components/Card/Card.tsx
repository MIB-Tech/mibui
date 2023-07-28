import {FC} from 'react';
import {PropsType} from './Card.types.tsx';
import {twMerge} from 'tailwind-merge';

const Card: FC<PropsType> = ({header, footer, children, className, ...props}) => {


  return (
    <div
      {...props}
      className={twMerge('border border-gray-200 rounded', className)}
    >
      {header && (
        <div className='p-5 border-b'>
          {header}
        </div>
      )}
      <div className='p-5'>
        {children}
      </div>
      {footer && (
        <div className='p-5 border-t'>
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card