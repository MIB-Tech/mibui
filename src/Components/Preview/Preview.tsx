import {FC, HTMLAttributes} from 'react';
import {Card} from '../Card';

const Preview: FC<HTMLAttributes<HTMLDivElement>> = ({title, children, ...props}) => {

  return (
    <div {...props}>
      {title && (
        <h3 className="text-2xl mb-4">
          {title}
        </h3>
      )}

      <Card className="bg-gray-100 border-gray-200 py-8 px-40">
        {children}
      </Card>
    </div>
  )
}

export default Preview