import {PropertyFilterOperator} from './Condition.types.ts';

export const CONDITION_FILTER_OPERATOR_LABELS:Record<PropertyFilterOperator, string> = {
  "!BETWEEN": 'Not between',
  "!CONTAIN": 'Does not contain',
  "!END": 'Does not end',
  "!EQ": 'Does not equal',
  "!IN": 'Not in',
  "!IS_NULL": 'Is not empty',
  "!LIKE": 'Not like',
  "!START": 'Does not start',
  BETWEEN: 'Between',
  CONTAIN: 'Contains',
  END: 'Ends',
  EQ: 'Equals',
  GT: 'Greater than',
  GTE: 'Greater than or equal',
  IN: 'In',
  IS_FALSE: 'Is false',
  IS_NULL: 'Is empty',
  IS_TRUE: 'Is true',
  LIKE: 'Is like',
  LT: 'Less than',
  LTE: 'Less than or equal',
  START: 'Starts'
}