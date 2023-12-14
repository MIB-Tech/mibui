import {PropertyFilter, ConditionProps} from '../Condition/Condition.types.ts';
import {HTMLAttributes} from 'react';
import {SizingType} from '../../../@types/Sizing.ts';

export type CompoundFilter<T extends {}> = {
  operator: CompoundFilterOperator
  filters: Array<PropertyFilter<T> | CompoundFilter<T>>
}

export type CompoundFilterProps<T extends {}> = {
  size?: SizingType
  setParentHover?: (hover?: boolean) => void
  value: CompoundFilter<T>
  onChange: (value: CompoundFilter<T>) => any
} & Pick<ConditionProps<T>, 'fieldsMapping'>
  & HTMLAttributes<HTMLDivElement>

export enum CompoundFilterOperator {
  And = 'AND',
  Or = 'OR',
}

