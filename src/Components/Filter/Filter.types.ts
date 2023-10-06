import {HTMLAttributes} from 'react';

export type FilterProps<T extends {}> = {
  value: Filter<T>
  onChange: (value: Filter<T>) => any
  defaultProperty: keyof T
} & HTMLAttributes<HTMLDivElement>

export type CompoundFilterProps<T extends {}> = {
  name: string,
  defaultProperty: keyof T,
  filter: CompoundFilter<T>
  setParentHover?: (hover?:boolean)=>void
} & HTMLAttributes<HTMLDivElement>

// type StringKeyOf<T extends {}> = keyof T
// type Prev = [never, 0, 1, 2, /*3, 4, 5,*/ ...0[]]
// type Join<K, P> = K extends string | number ?
//   P extends string | number ?
//     `${K}${'' extends P ? '' : '.'}${P}`
//     : never : never;
//
// export type Path<T, D extends number = 3> = [D] extends [never] ?
//   never :
//   T extends object ?
//     {
//       [K in keyof T]-?: K extends string | number ?
//       `${K}` | Join<K, Path<T[K], Prev[D]>>
//       : never
//     }[StringKeyOf<T>] : ''

// type Leaves<T, D extends number = 10> = [D] extends [never] ?
//   never :
//   T extends object ?
//     { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[StringKeyOf<T>]
//     : '';

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

export enum CompoundFilterOperator {
  And = 'AND',
  Or = 'OR',
}

export type PropertyFilterValue = any
export type PropertyFilter<T extends {}> = {
  // property: Path<T>
  property: /*string | */keyof T
  operator: PropertyFilterOperator
  value?: PropertyFilterValue
}

export type CompoundFilter<T extends {}> = {
  operator: CompoundFilterOperator
  filters: Array<PropertyFilter<T> | CompoundFilter<T>>
}

export type Filter<T extends {}> = PropertyFilter<T> | CompoundFilter<T>