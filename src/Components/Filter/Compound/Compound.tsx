import Condition from '../Condition/Condition.tsx';
import {FieldArray, FormikProvider, useFormik} from 'formik';
import {Button} from '../../Button';
import {Icon} from '../../SvgIcon';
import {PlusIcon, TrashIcon} from '@heroicons/react/20/solid';
import {ButtonProps} from '../../Button/Button.types.tsx';
import {useEffect, useMemo, useState} from 'react';
import {twMerge} from 'tailwind-merge';
import {PropertyFilter, PropertyFilterOperator} from '../Condition/Condition.types.ts';
import {CompoundFilter, CompoundFilterOperator, CompoundFilterProps} from './Compound.types.ts';
import {useSizing} from '../../../hooks/UseSizing.ts';
import {IconElement} from '../../../Forms/InputGroup/InputGroup.types.ts';
import {FilterContext} from '../Filter.Context.tsx';
import {CompoundOperator} from './Compound.Operator.tsx';

const ButtonField = ({icon = PlusIcon, children, ...props}: ButtonProps & { icon?: IconElement }) => (
  <Button
    variant='clean'
    className='flex items-center space-x-1 font-semibold'
    {...props}
  >
    <Icon icon={icon}/>
    {children}
  </Button>
);

const Compound = <T extends {}>(
  {
    size,
    value,
    onChange,
    setParentHover,
    fieldsMapping,
    className,
    ...props
  }: CompoundFilterProps<T>
) => {
  const sizingClassName = useSizing(size);
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
      <FilterContext.Provider value={{size, fieldsMapping}}>
        <div
          {...props}
          className={twMerge(
            'space-y-1 px-2 py-1 ring-1 ring-gray-200 rounded cursor-pointer',
            hover && 'ring-2 ring-primary-500',
            className
          )}
          onMouseEnter={() => changeHover(true)}
          onMouseLeave={() => changeHover(false)}
        >
          <div className={twMerge('text-gray-500', sizingClassName.text)}>
            Any of the following are true…
          </div>

          {filters.map((nestedFilter, index) => (
            <div key={index} className='grid grid-cols-10 gap-2'>
              <div className={twMerge('col-span-1 flex items-center justify-center h-fit', sizingClassName.text)}>
                {index === 0 && 'Where'}
                {index === 1 && <CompoundOperator/>}
                {index > 1 && operator}
              </div>
              <div className='col-span-9 space-y-1'>
                {'property' in nestedFilter ?
                  <Condition
                    size={size}
                    value={nestedFilter}
                    onChange={value => setFieldValue(`filters.${index}.property`, value)}
                    fieldsMapping={fieldsMapping}
                  /> :
                  <Compound
                    size={size}
                    value={nestedFilter}
                    onChange={value => setFieldValue(`filters.${index}}.filters`, value)}
                    fieldsMapping={fieldsMapping}
                    setParentHover={setHover}
                  />
                }
              </div>
            </div>
          ))}

          <div className='grid grid-cols-10 gap-2'>
            <div className='col-span-1'/>
            <div className={twMerge('col-span-9 flex space-x-2 invisible', hover && 'visible')}>
              <FieldArray name='filters'>
                {({push, remove}) => (
                  <>
                    <ButtonField
                      size={size}
                      onClick={() => push(defaultPropertyFilter)}
                    >
                      Add condition
                    </ButtonField>
                    <ButtonField
                      size={size}
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
                    <ButtonField
                      size={size}
                      icon={TrashIcon}
                      color='error'
                      onClick={() => {
                        remove(0);
                      }}
                    >
                      Delete
                    </ButtonField>
                  </>
                )}
              </FieldArray>
            </div>
          </div>
        </div>
      </FilterContext.Provider>
    </FormikProvider>
  )
};

export default Compound;