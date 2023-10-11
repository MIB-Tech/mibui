import Condition from '../Condition/Condition.tsx';
import {FieldArray, FormikProvider, useFormik} from 'formik';
import {Button} from '../../Button';
import {Icon} from '../../SvgIcon';
import {PlusIcon, TrashIcon} from '@heroicons/react/20/solid';
import {ButtonProps} from '../../Button/Button.types.tsx';
import {useEffect, useMemo, useState} from 'react';
import {twMerge} from 'tailwind-merge';
import {IconButton} from '../../IconButton/IconButton.tsx';
import {PropertyFilter, PropertyFilterOperator} from '../Condition/Condition.types.ts';
import {CompoundFilter, CompoundFilterOperator, CompoundFilterProps} from './Compound.types.ts';
import {Select} from '../../../Formik';
import {Option} from '../../../Forms';

const ButtonField = ({children, ...props}: ButtonProps) => (
  <Button
    size='sm'
    color='secondary'
    className='flex items-center'
    {...props}
  >
    <Icon icon={PlusIcon}/>
    {children}
  </Button>
);

const Compound = <T extends {}>(
  {
    value,
    onChange,
    setParentHover,
    fieldsMapping,
    className,
    ...props
  }: CompoundFilterProps<T>
) => {
  const [hover, setHover] = useState<boolean>();
  const formik = useFormik<CompoundFilter<T>>({
    initialValues: value,
    onSubmit: () => {
    }
  });
  const {values, setFieldValue} = formik;
  const {operator, filters} = values;

  useEffect(() => {
    onChange(values)
  }, [values]);
  const defaultProperty = Object.keys(fieldsMapping)[0] as keyof T;

  const defaultPropertyFilter = useMemo<PropertyFilter<T>>(() => ({
    property: defaultProperty,
    operator: PropertyFilterOperator.Equal,
    value: null
  }), [defaultProperty]);

  const changeHover = (hover?: boolean) => {
    setHover(hover);
    setParentHover?.(!hover);
  };

  return (
    <FormikProvider value={formik}>
      <div
        {...props}
        className={twMerge(
          'space-y-1 px-2 py-1 ring-1  ring-gray-200 rounded cursor-pointer',
          hover && 'ring-2 ring-primary-500',
          className
        )}
        onMouseEnter={() => changeHover(true)}
        onMouseLeave={() => changeHover(false)}
      >
        <FieldArray name='filters'>
          {({push}) => (
            <div className='flex justify-between items-center'>
              <div className='text-sm text-gray-500'>Any of the following are true…</div>
              <div className={twMerge('flex space-x-2 invisible', hover && 'visible')}>
                <ButtonField onClick={() => push(defaultPropertyFilter)}>
                  Add condition
                </ButtonField>
                <ButtonField
                  onClick={() => {
                    const compoundFilter: CompoundFilter<T> = {
                      operator: CompoundFilterOperator.And,
                      filters: [defaultPropertyFilter]
                    };
                    push(compoundFilter);
                  }}
                >
                  Add condition group
                </ButtonField>
                <IconButton
                  size='sm'
                  iconElement={TrashIcon}
                  onClick={() => {

                  }}
                />
              </div>
            </div>
          )}
        </FieldArray>

        {filters.map((nestedFilter, index) => (
          <div key={index} className='grid grid-cols-10 gap-2'>
            <div className='col-span-1 flex items-center justify-center h-fit text-sm'>
              {index === 0 && 'Where'}
              {index === 1 && (
                <Select
                  size='sm'
                  name='operator'
                  className='justify-center'
                >
                  {Object.values(CompoundFilterOperator).map(operator => (
                    <Option key={operator} value={operator}>{operator}</Option>
                  ))}
                </Select>
              )}
              {index > 1 && operator}
            </div>
            <div className='col-span-9 space-y-1'>
              {'property' in nestedFilter ?
                <Condition
                  value={nestedFilter}
                  onChange={value => setFieldValue(`filters.${index}.property`, value)}
                  fieldsMapping={fieldsMapping}
                /> :
                <Compound
                  value={nestedFilter}
                  onChange={value => setFieldValue(`filters.${index}}.filters`, value)}
                  fieldsMapping={fieldsMapping}
                  setParentHover={setHover}
                />
              }
            </div>
          </div>
        ))}
      </div>
    </FormikProvider>
  )
};

export default Compound;