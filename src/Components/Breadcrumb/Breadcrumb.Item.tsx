import {FC} from 'react';
import {BreadcrumbItemProps} from './Breadcrumb.types.ts';
import {Link} from 'react-router-dom';
import {twMerge} from 'tailwind-merge';

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({to, className, ...props}) => {
  return (
    <li className="inline-flex items-center">
      <Link
        to={to}
        className={twMerge(
          `inline-flex items-center hover:text-primary-600`,
          className
        )}
        {...props}
      />
    </li>
  )
}

export default BreadcrumbItem