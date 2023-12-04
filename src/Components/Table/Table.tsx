import React from 'react';
import {TableSizeProvider} from './Context/Table.Context.tsx';
import {TableProps} from './Table.types.tsx';
import {twMerge} from 'tailwind-merge';


const Table: React.FC<TableProps> = (
  {
    size,
    borderStyle,
    hoverable,
    bordered,
    stickyHeader,
    stickyColumn,
    className,
    ...props
  }
) => (
  <TableSizeProvider

    size={size}
    borderStyle={borderStyle}
    hoverable={hoverable}
    bordered={bordered}
    stickyHeader={stickyHeader}
    stickyColumn={stickyColumn}
  >
    <div
      className={twMerge(
        'bg-white',
        stickyHeader && 'overflow-y-scroll',
        stickyColumn && 'overflow-x-scroll',
        className
      )}
    >
      <table
        {...props}
        className='border-separate border-spacing-0'
      />
    </div>
  </TableSizeProvider>
);

export default Table;



