import {StringColumn} from './String/String.types.ts';
import {ReactNode} from 'react';
import {NumberColumn} from './Number/Number.types.ts';
import {BooleanColumn} from './Boolean/Boolean.types.ts';
import {ObjectColumn} from './Object/Object.types.ts';
import {ArrayColumn} from './Array/Array.types.ts';

export enum ColumnType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Object = 'object',
  Array = 'array',
}

export type SetFieldValueType = <T extends object>(props: { rowIndex: number, field: keyof T, value: any }) => void
export type SetRowValueType = (props: { rowIndex: number, value: any }) => void
export type MappedColumn<T extends object> = {
  field: Extract<keyof T, string>;
  header?: ReactNode;
  editable?: boolean;
  renderCell?: (row: T, index: number) => ReactNode
  getValue?: (row: T, index: number) => any
  slots?: {
    control?: (props: {
      setFieldValue: SetFieldValueType,
      setRowValue: SetRowValueType,
      rowIndex: number,
      value: any,
      changeFocus: () => void
    }) => ReactNode
  },
  className?: string
} & (StringColumn | NumberColumn | BooleanColumn | ObjectColumn | ArrayColumn);

export type CalculatedColumn<T extends object> =
  Omit<MappedColumn<T>, 'editable' | 'field'>
export type Column<T extends object> = MappedColumn<T> | CalculatedColumn<T>