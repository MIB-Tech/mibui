import {FC} from 'react';
import {PropsType} from './Card.types.tsx';
import {twMerge} from 'tailwind-merge';

const Card: FC<PropsType> = ({header, footer, children, className, ...props}) => {


  return (
    <div
      {...props}
      className={twMerge('border border-gray-200 rounded p-5', className)}
    >
      {header && (
        <div className='border-b pb-5'>
          {header}
        </div>
      )}
      {header || footer ?
        <div className='py-5'>
          {children}
        </div>:
        children
      }

      {footer && (
        <div className='pt-5 border-t'>
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card