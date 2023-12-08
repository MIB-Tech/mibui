import {Children, FC} from 'react';
import {BreadcrumbProps} from './Breadcrumb.types.ts';
import {twMerge} from 'tailwind-merge';
import {ChevronRightIcon} from '@heroicons/react/20/solid';
import {Icon} from '../SvgIcon';

const Breadcrumb: FC<BreadcrumbProps> = ({className, children, ...props}) => {

  return (
    <nav className="flex">
      <ol
        className={twMerge('inline-flex items-center space-x-1 md:space-x-2', className)}
        {...props}
      />
      {Children.map(children, (child, index) => (
        <div className="flex items-center">
          {index > 0 && <Icon icon={ChevronRightIcon} size={5} className='mx-2'/>}
          {child}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb