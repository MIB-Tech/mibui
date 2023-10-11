import {Input, InputGroup, Option} from '../../../Forms';
import {IconButton} from '../../IconButton/IconButton.tsx';
import {TrashIcon} from '@heroicons/react/20/solid';
import {twMerge} from 'tailwind-merge';
import {Select} from '../../../Formik';
import {ConditionProps, PropertyFilter, PropertyFilterOperator} from './Condition.types.ts';
import {FormikProvider, useFormik} from 'formik';
import {useEffect} from 'react';

const Condition = <T extends {}>(
  {
    value,
    onChange,
    className,
    fieldsMapping,
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
    onChange(values)
  }, [values]);

  return (
    <FormikProvider value={formik}>
      <div
        {...props}
        className={twMerge('flex space-x-1', className)}
      >
        <InputGroup className='grid grid-cols-3 grow'>
          <Select
            name='property'
            size='sm'
            placeholder='Field'
          >
            {Object.keys(fieldsMapping).map(option => (
              <Option key={option.toString()} value={option}>{option.toString()}</Option>
            ))}
          </Select>
          <Select
            name='operator'
            size='sm'
            placeholder='Operator'
          >
            {Object.values(PropertyFilterOperator).map(option => (
              <Option key={option.toString()} value={option}>{option.toString()}</Option>
            ))}
          </Select>
          <Input
            name='value'
            size='sm'
            placeholder='Value'
          />
        </InputGroup>
        <IconButton
          size='sm'
          iconElement={TrashIcon}
          onClick={() => {

          }}
        />
      </div>
    </FormikProvider>
  );
};

export default Condition;