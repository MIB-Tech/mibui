import {ColumnType} from '../Column.types.ts';

export enum NumberFormat {
  Currency = 'CURRENCY',
  Percent = 'PERCENT'
}

export type NumberColumn = {
  type: ColumnType.Number
  format?: NumberFormat
}