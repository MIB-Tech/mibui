import {TableProps} from '../Table/Table.types.tsx';
import {Column} from './Column/Column.types.ts';

export type DataGridProps<T extends object> = {
  columns: Array<Column<T>>;
  data?: Array<T>;
  onChange?: (value: Array<T>) => any;
} & Omit<TableProps, 'onChange'>;