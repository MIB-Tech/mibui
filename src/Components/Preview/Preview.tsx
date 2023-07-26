import {FC, HTMLAttributes} from 'react';
import {Card} from '../Card/Card.tsx';

const Preview: FC<HTMLAttributes<HTMLDivElement>> = ({title, children, ...props}) => {

  return (
    <div {...props}>
      {title && (
        <h3 className="text-2xl mb-4">
          {title}
        </h3>
      )}

      <Card className="flex justify-center bg-gray-100 w-full border-gray-200 py-14 px-56">
        {children}
      </Card>
    </div>
  )
}

export default Preview