import {StringColumn} from './StringColumn/StringColumn.types.ts';
import {ReactNode} from 'react';
import {NumberColumn} from './NumberColumn/Column.Number.types.ts';

export enum ColumnType {
  String = 'string',
  Number = 'number'
}

export type MappedColumn<T extends object> = {
  field: Extract<keyof T, string>;
  headerName?: string | number;
  editable?: boolean;
  renderCell?: (row: T, index: number) => ReactNode
} & (StringColumn | NumberColumn);

export type CalculatedColumn<T extends object> =
  Required<Pick<MappedColumn<T>, 'renderCell' | 'headerName'>>
  & (StringColumn | NumberColumn);
export type Column<T extends object> = MappedColumn<T> | CalculatedColumn<T>