import {Option} from '../../../Forms';
import {Select} from '../../../Formik';
import {FilterSelectProps} from '../Condition/Condition.types.ts';
import {twMerge} from 'tailwind-merge';
import {useFilterContext} from '../Filter.Context.tsx';
import {CompoundFilterOperator} from './Compound.types.ts';

export const CompoundOperator = <T extends {}>({className, ...props}: FilterSelectProps<T>) => {
  const {size} = useFilterContext<T>();

  return (
    <Select
      size={size}
      name='operator'
      placeholder='Operator'
      {...props}
      className={twMerge('capitalize justify-center', className)}
    >
      {Object.values(CompoundFilterOperator).map(operator => (
        <Option
          key={operator}
          value={operator}
          className='capitalize'
        >
          {operator}
        </Option>
      ))}
    </Select>
  );
};