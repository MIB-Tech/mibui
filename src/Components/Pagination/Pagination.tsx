import {FC, HTMLAttributes} from 'react';
import * as classNames from 'classnames';
import PaginationButton from './Pagination.Button.tsx';

const Pagination: FC<HTMLAttributes<HTMLDivElement>> = ({className}) => {

  return (
    <nav className={classNames(className)}>
      <ul className="inline-flex -space-x-px text-sm">
        <PaginationButton className="rounded-l-lg">
          Previous
        </PaginationButton>
        {[...Array(5).keys()].map(index => {
          const page = index + 1
          const active = page === 1;

          return (
            <PaginationButton
              key={page}
              active={active}
            >
              {page}
            </PaginationButton>
          )
        })}
        <PaginationButton className="rounded-r-lg">
          Previous
        </PaginationButton>
      </ul>
    </nav>
  )
}

export default Pagination