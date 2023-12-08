import {ColumnType} from '../Column.types.ts';

export enum NumberFormat {
  Amount = 'AMOUNT',
  Percent = 'PERCENT'
}

export type NumberColumn = {
  type: ColumnType.Number
  format?: NumberFormat
}