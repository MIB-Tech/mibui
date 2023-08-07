import {Children, FC} from 'react';
import {BreadcrumbProps} from './Breadcrumb.types.ts';
import {twMerge} from 'tailwind-merge';
import {ChevronRightIcon} from '@heroicons/react/20/solid';

const Breadcrumb: FC<BreadcrumbProps> = ({className, children, ...props}) => {

  return (
    <nav className="flex">
      <ol
        className={twMerge('inline-flex items-center space-x-1 md:space-x-2', className)}
        {...props}
      />
      {Children.map(children, (child, index) => (
        <div className="flex items-center">
          {index > 0 && <ChevronRightIcon className="w-5 h-5 text-gray-400 mx-2"/>}
          {child}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb