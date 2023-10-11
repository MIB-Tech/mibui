import {HTMLAttributes} from 'react';
import {PropertyFilter, ConditionProps} from './Condition/Condition.types.ts';
import {CompoundFilter} from './Compound/Compound.types.ts';

export type FilterProps<T extends {}> = {
  value: Filter<T>
  onChange: (value: Filter<T>) => any
} & Pick<ConditionProps<T>, 'fieldsMapping'>
  & HTMLAttributes<HTMLDivElement>

export type Filter<T extends {}> = PropertyFilter<T> | CompoundFilter<T>


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

