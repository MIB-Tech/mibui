import {FC} from 'react';
import {CompoundFilter} from '../../../Components';
import {CompoundFilterOperator, CompoundFilterProps} from '../../../Components/Filter/Compound/Compound.types.ts';
import {PROPERTY_FILTER, User} from './ConditionFilterExample.tsx';

export const CompoundFilterExample: FC<Partial<CompoundFilterProps<User>>> = ({...props}) => (
  <CompoundFilter
    value={{
      operator: CompoundFilterOperator.And,
      filters: [PROPERTY_FILTER]
    }}
    onChange={console.log}
    fieldsMapping={{
      id: {},
      email: {},
      username: {}
    }}
    {...props}
  />
);