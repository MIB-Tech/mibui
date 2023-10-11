import {HTMLAttributes} from 'react';

export enum PropertyFilterOperator {
  Equal = 'EQ',
  NotEqual = '!EQ',
  GreaterThan = 'GT',
  GreaterThanOrEqual = 'GTE',
  LessThan = 'LT',
  LessThanOrEqual = 'LTE',
  IsNull = 'IS_NULL',
  IsNotNull = '!IS_NULL',
  IsTrue = 'IS_TRUE',
  IsFalse = 'IS_FALSE',
  In = 'IN',
  NotIn = '!IN',
  Like = 'LIKE',
  NotLike = '!LIKE',
  Contain = 'CONTAIN',
  DoesNotContain = '!CONTAIN',
  Start = 'START',
  DoesNotStart = '!START',
  End = 'END',
  DoesNotEnd = '!END',
  Between = 'BETWEEN',
  NotBetween = '!BETWEEN',
}

export type PropertyFilterValue = any
export type PropertyFilter<T extends {}> = {
  // property: Path<T>
  property: /*string | */keyof T
  operator: PropertyFilterOperator
  value?: PropertyFilterValue
}

export type FieldMapping = {
  title?: string
}
export type ConditionProps<T extends {}> = {
  fieldsMapping: Partial<Record<keyof T, FieldMapping>>
  value: PropertyFilter<T>
  onChange: (value: PropertyFilter<T>) => any
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>

