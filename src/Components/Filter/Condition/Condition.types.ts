import {HTMLAttributes} from 'react';
import {SelectProps} from '../../../Formik';
import {FilterContextValue} from '../Filter.Context.tsx';

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

export enum FieldType {
  String = 'STRING',
  Number = 'NUMBER',
  Boolean = 'BOOLEAN',
  Array = 'ARRAY',
}
export type FieldMapping<Type extends FieldType> = {
  title?: string
  type?: Type
}
export type ConditionProps<T extends {}> = {
  value: PropertyFilter<T>
  onChange: (value: PropertyFilter<T>) => any
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>
  & FilterContextValue<T>


export type FilterSelectProps<T extends {}> = Omit<SelectProps<keyof T, false>, 'name'>