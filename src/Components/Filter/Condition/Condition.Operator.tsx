import {Option} from '../../../Forms';
import {Select} from '../../../Formik';
import {FilterSelectProps, PropertyFilterOperator} from './Condition.types.ts';
import {twMerge} from 'tailwind-merge';
import {useFilterContext} from '../Filter.Context.tsx';
import {CONDITION_FILTER_OPERATOR_LABELS} from './Condition.utils.ts';

export const ConditionOperator = <T extends {}>({className, ...props}: FilterSelectProps<T>) => {
  const {size} = useFilterContext<T>();

  return (
    <Select
      name='operator'
      placeholder='Operator'
      size={size}
      {...props}
      className={twMerge('capitalize', className)}
    >
      {Object.values(PropertyFilterOperator).map(option => (
        <Option
          key={option.toString()}
          value={option}
          className='capitalize'
        >
          {CONDITION_FILTER_OPERATOR_LABELS[option]}
        </Option>
      ))}
    </Select>
  );
};