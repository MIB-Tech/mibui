import {FC, HTMLAttributes} from 'react';
import {Card} from '../Card';
import {twMerge} from 'tailwind-merge';

const Preview: FC<HTMLAttributes<HTMLDivElement>> = ({title, children, className, ...props}) => {

  return (
    <div>
      {title && (
        <h3 className="text-2xl mb-4 capitalize">
          {title}
        </h3>
      )}

      <Card
        className={twMerge('bg-gray-100 border-gray-200 py-8 px-40', className)}
        {...props}
      >
        {children}
      </Card>
    </div>
  )
}

export default Preview