import {FC} from 'react';
import {ListProps} from './List.types.ts';
import {twMerge} from 'tailwind-merge';

const List: FC<ListProps> = ({className, ...props}) => (
  <ul
    className={twMerge('space-y-0.5 font-medium p-1', className)}
    {...props}
  />
);

export default List;