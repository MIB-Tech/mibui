import {FC} from 'react';
import {ConditionFilter} from '../../../Components';
import {
  ConditionProps,
  PropertyFilter,
  PropertyFilterOperator
} from '../../../Components/Filter/Condition/Condition.types.ts';

export type User = {
  id: string
  username: string
  email: string
}


export const PROPERTY_FILTER: PropertyFilter<User> = {
  property: 'id',
  operator: PropertyFilterOperator.Equal,
  value: ''
};
export const ConditionFilterExample: FC<Partial<ConditionProps<User>>> = ({...props}) => (
  <ConditionFilter
    value={PROPERTY_FILTER}
    onChange={console.log}
    fieldsMapping={{
      id: {},
      email: {},
      username: {}
    }}
    {...props}
  />
);