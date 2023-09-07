import {FC} from 'react';
import {Button} from '../Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup.tsx';
import {PaginationProps} from './Pagination.types.tsx';
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from '@heroicons/react/20/solid';
import {Icon} from '../SvgIcon';

const Pagination: FC<PaginationProps> = ({pageLess, square, ...props}) => {

  return (
    <ButtonGroup {...props}>
      <Button>
        {square ? <Icon icon={ChevronDoubleLeftIcon}/> : 'Previous'}
      </Button>
      {!pageLess && (
        <>
          {[...Array(5).keys()].map(index => {
            const page = index + 1;
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
        {square ? <Icon icon={ChevronDoubleRightIcon}/> : 'Next'}
      </Button>
    </ButtonGroup>
  )
}

export default Pagination