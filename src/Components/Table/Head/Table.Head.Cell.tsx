import React from 'react';
import {useTableContext} from '../Table.utils.tsx';
import {twMerge} from 'tailwind-merge';
import {CellProps} from '../Table.types.tsx';

const TableHeadCell: React.FC<CellProps> = ({className, ...props}) => {
  const {cellClassName, bordered, borderClassName, stickyColumn} = useTableContext();

  return (
    <th
      {...props}
      className={twMerge(
        stickyColumn && 'first:sticky first:backdrop-blur-3xl first:bg-gray-50/30 left-0 z-10 first:border-r-2',
        bordered && 'border-r border-t first:border-l',
        cellClassName,
        borderClassName,
        className
      )}
    />
  );
};
export default TableHeadCell;
