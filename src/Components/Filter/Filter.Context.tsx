import {createContext, useContext} from 'react';
import {SizingType} from '../../@types/Sizing.ts';
import {FieldMapping} from './Condition/Condition.types.ts';

export type FilterContextValue<T extends {}> = {
  size?: SizingType
  fieldsMapping: Partial<Record<keyof T, FieldMapping<any> | true>>
}
export const FilterContext = createContext<FilterContextValue<{}>>({
  fieldsMapping: {}
});

export const useFilterContext = <T extends {}>() => {
  const context = useContext<FilterContextValue<T>>(FilterContext)
  const {fieldsMapping} = context
  const properties = Object.keys(fieldsMapping) as Array<keyof T>

  return {
    ...context,
    properties
  }
};