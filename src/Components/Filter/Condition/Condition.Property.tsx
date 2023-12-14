import {Option} from '../../../Forms';
import {Select} from '../../../Formik';
import {FilterSelectProps} from './Condition.types.ts';
import {twMerge} from 'tailwind-merge';
import {useFilterContext} from '../Filter.Context.tsx';

export const ConditionProperty = <T extends {}>({className, ...props}: FilterSelectProps<T>) => {
  const {size, properties, fieldsMapping} = useFilterContext<T>()

  return (
    <Select
      name='property'
      placeholder='Property'
      {...props}
      size={size}
      className={twMerge('capitalize', className)}
    >
      {properties.map(property => {
        const fieldMapping = fieldsMapping[property]
        const label = (typeof fieldMapping === 'object' && fieldMapping?.title) || property.toString()

        return (
          <Option
            key={label}
            value={property}
            className='capitalize'
          >
            {label}
          </Option>
        )
      })}
    </Select>
  )
}