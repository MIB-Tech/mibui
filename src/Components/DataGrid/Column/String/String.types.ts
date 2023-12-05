import {ColumnType} from '../Column.types.ts';

export enum StringColumnFormat {
  Text = 'TEXT'
}

export type StringColumn = {
  type?: ColumnType.String
  format?: StringColumnFormat
}