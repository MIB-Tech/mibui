import {ButtonProps} from '../Button/Button.types.tsx';

export type PaginationProps = {
  pageLess?: boolean
  square?: true
  page?: number
  setPage?: (page: number) => void
} & ButtonProps