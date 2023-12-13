import {ColumnType} from '../Column.types.ts';

export enum NumberFormat {
  Amount = 'AMOUNT',
  Percent = 'PERCENT'
}

export type AmountFormatColumn = {
  format?: NumberFormat.Amount,
  currencyCode?: string
}

export type PercentFormatColumn = {
  format: NumberFormat.Percent
}

export type NumberColumn = {
  type: ColumnType.Number
} & (AmountFormatColumn | PercentFormatColumn)