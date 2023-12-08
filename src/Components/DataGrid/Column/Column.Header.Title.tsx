import {FC} from 'react';
import {Column} from './Column.types.ts';

const ColumnHeaderTitle: FC<{column: Column<any>}> = ({column}) => (
  <>
    {'field' in column && column.field ?
      column.header || column.field :
      column.header}
  </>
);

export default ColumnHeaderTitle