import {FC} from 'react';
import {Column} from './Column.types.ts';

const ColumnHeaderTitle: FC<{column: Column<any>}> = ({column}) => (
  <>
    {'field' in column && column.field ?
      column.headerName || column.field :
      column.headerName}
  </>
);

export default ColumnHeaderTitle