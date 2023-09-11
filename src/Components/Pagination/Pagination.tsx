import {FC} from 'react';
import {Button} from '../Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup.tsx';
import {PaginationProps} from './Pagination.types.tsx';
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from '@heroicons/react/20/solid';

const Pagination: FC<PaginationProps> = ({pageLess, icon, ...props}) => {

  return (
    <ButtonGroup {...props}>
      <Button>
        {icon ? <ChevronDoubleLeftIcon className="w-4 h-4"/> : 'Previous'}
      </Button>
      {!pageLess && (
        <>
          {[...Array(5).keys()].map(index => {
            const page = index + 1
            const active = page === 3;

            return (
              <Button
                key={page}
                active={active}
              >
                {page}
              </Button>
            )
          })}
          <Button>
            ...
          </Button>
          {[...Array(2).keys()].map(index => {
            const page = index + 1 + 5

            return (
              <Button
                key={page}
              >
                {page}
              </Button>
            )
          })}
        </>
      )}

      <Button>
        {icon ? <ChevronDoubleRightIcon className="w-4 h-4"/> : 'Next'}
      </Button>
    </ButtonGroup>
  )
}

export default Pagination