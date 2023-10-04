import React from 'react';
import {TableHeadProps} from '../Table.types.tsx';
import {twMerge} from 'tailwind-merge';
import {useTableContext} from '../Table.utils.tsx';

const TableHead: React.FC<TableHeadProps> = ({className, children, ...props}) => {
  const {borderClassName, stickyHeader} = useTableContext();

  return (
    <thead
      {...props}
      className={twMerge(
        'text-left',
        borderClassName,
        stickyHeader && 'sticky backdrop-blur-md bg-gray-50/30 top-0 z-10',
        className
      )}
    >
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHead;
