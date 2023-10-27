import {InputGroup} from '../../../Forms';
import {IconButton} from '../../IconButton/IconButton.tsx';
import {TrashIcon} from '@heroicons/react/20/solid';
import {twMerge} from 'tailwind-merge';
import {ConditionProps, PropertyFilter} from './Condition.types.ts';
import {FormikProvider, useFormik} from 'formik';
import {useEffect} from 'react';
import {ConditionProperty} from './Condition.Property.tsx';
import {FilterContext} from '../Filter.Context.tsx';
import {ConditionOperator} from './Condition.Operator.tsx';
import {ConditionValue} from './Condition.Value.tsx';

const Condition = <T extends {}>(
  {
    size,
    fieldsMapping,
    value,
    onChange,
    className,
    ...props
  }: ConditionProps<T>
) => {

  const formik = useFormik<PropertyFilter<T>>({
    initialValues: value,
    onSubmit: () => {
    }
  });
  const {values} = formik;

  useEffect(() => {
    onChange(values);
  }, [values]);

  return (
    <FormikProvider value={formik}>
      <FilterContext.Provider value={{size, fieldsMapping}}>
        <div
          {...props}
          className={twMerge('flex space-x-1', className)}
        >
          <InputGroup className='grid grid-cols-3 grow'>
            <ConditionProperty/>
            <ConditionOperator/>
            <ConditionValue/>
          </InputGroup>
          <IconButton
            size={size}
            iconElement={TrashIcon}
            onClick={() => {

            }}
          />
        </div>
      </FilterContext.Provider>
    </FormikProvider>
  );
};

export default Condition;