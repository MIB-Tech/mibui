import {ColumnType} from '../Column.types.ts';

export enum StringColumnFormat {
  Text = 'TEXT',
  Datetime = 'DATETIME'
}

export type StringColumn = {
  type?: ColumnType.String
  format?: StringColumnFormat
}