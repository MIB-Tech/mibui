import {
  CompoundFilter,
  CompoundFilterOperator,
  CompoundFilterProps,
  PropertyFilter,
  PropertyFilterOperator
} from './Filter.types.ts';
import Property from './Filter.Property.tsx';
import {FieldArray} from 'formik';
import {Button} from '../Button';
import {Icon} from '../SvgIcon';
import {PlusIcon, TrashIcon} from '@heroicons/react/20/solid';
import {ButtonProps} from '../Button/Button.types.tsx';
import {useMemo, useState} from 'react';
import {Option, Select} from '../../Forms';
import {twMerge} from 'tailwind-merge';
import {IconButton} from '../IconButton/IconButton.tsx';

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

const Compound = <T extends {}>({name, filter, defaultProperty, setParentHover}: CompoundFilterProps<T>) => {
  const [hover, setHover] = useState<boolean>();
  const {operator, filters} = filter;

  const defaultPropertyFilter = useMemo<PropertyFilter<T>>(() => ({
    property: defaultProperty,
    operator: PropertyFilterOperator.Equal,
    value: null
  }), [defaultProperty]);

  return (
    <div
      className={twMerge(
        'space-y-1 px-2 py-1 ring-1  ring-gray-200 rounded cursor-pointer',
        hover && 'ring-2 ring-primary-500'
      )}
      onMouseEnter={() => {
        setParentHover?.(false)
        setHover(true)
      }}
      onMouseLeave={() => {
        setParentHover?.(true)
        setHover(false)
      }}
    >
      <FieldArray name={name}>
        {({push}) => (
          <div className='flex justify-between items-center'>
            <div className='text-sm text-gray-500'>Any of the following are true…</div>
            <div className={twMerge(
              'flex space-x-2 invisible',
              hover && 'visible'
            )}>
              <ButtonField
                onClick={() => {
                  push(defaultPropertyFilter);
                }}
              >
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
          <div className={twMerge(
            'col-span-1 flex items-center justify-center h-fit text-sm',
          )}>
            {index === 0 && 'Where'}
            {index === 1 && (
              <Select
                size='sm'
                value={operator}
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
              <Property filter={nestedFilter}/> :
              <Compound
                setParentHover={setHover}
                filter={nestedFilter}
                defaultProperty={defaultProperty}
                name={`${name}.${index}.filters`}
              />
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Compound;