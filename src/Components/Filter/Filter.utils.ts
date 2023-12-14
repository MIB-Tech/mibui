import {Filter} from './Filter.types.ts';
import {FilterContextValue} from './Filter.Context.tsx';
import {FieldType, PropertyFilterOperator} from './Condition/Condition.types.ts';

export const filterToParams = <T extends object>({filter, prefix = 'filter', fieldsMapping}:{filter: Filter<T>, prefix?: string} & Pick<FilterContextValue<T>, 'fieldsMapping'>) => {
  let result: Record<string, string | number> = {};

  if ('filters' in filter) {
    const {operator, filters} = filter;
    if (filters.length === 1) {
      result = {
        ...result,
        ...filterToParams({fieldsMapping, filter: filters[0], prefix})
      };
    }

    if (filters.length > 1) {
      result[`${prefix}[operator]`] = operator;
      filters.forEach((_filter, i) => {
        result = {
          ...result,
          ...filterToParams({fieldsMapping, filter:_filter, prefix: `${prefix}[filters][${i}]`})
        };
      });
    }

    return result;
  }

  const {property, operator, value} = filter;

  let _value = value;

  let def = fieldsMapping[property];
  if (typeof def === 'object') {
    switch (def?.type) {
      case FieldType.String:
      case FieldType.Number:
      case FieldType.Boolean:
        break;
      default:
        switch (operator) {
          case PropertyFilterOperator.IsNull:
          case PropertyFilterOperator.IsNotNull:
          case PropertyFilterOperator.IsTrue:
          case PropertyFilterOperator.IsFalse:
            break;
          default:
            _value = typeof value === 'string' ? value : value?.id;
        }
    }
  }

  return {
    ...result,
    [`${prefix}[operator]`]: operator,
    [`${prefix}[property]`]: property,
    [`${prefix}[value]`]: _value
  };
};
// export const serializeSort = (sort: SortInput<any>) => Object.keys(sort)
//   .reduce((obj, columnName) => ({...obj, [`sort[${columnName}]`]: sort[columnName]}), {});