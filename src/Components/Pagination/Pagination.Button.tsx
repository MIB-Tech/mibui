import {FC, HTMLAttributes} from 'react';
import * as classNames from 'classnames';

const PaginationButton: FC<HTMLAttributes<HTMLLIElement> & { active?: boolean }> = ({className, active, children}) => {
  const numberItem = false
  return (
    <li>
      <a
        href="#"
        className={classNames(
          className,
          'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
          numberItem ? 'ml-0 ' : '',
          active ? 'text-primary-600 bg-primary-50 hover:bg-primary-100 hover:text-primary-700' : ''
        )}
        // className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
      >
        {children}
      </a>
    </li>
  )
}

export default PaginationButton