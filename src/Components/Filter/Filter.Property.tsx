import {Input, InputGroup, Option, Select} from '../../Forms';
import {PropertyFilter, PropertyFilterOperator} from './Filter.types.ts';
import {IconButton} from '../IconButton/IconButton.tsx';
import {TrashIcon} from '@heroicons/react/20/solid';

const Property = <T extends {}>({filter}: { filter: PropertyFilter<T> }) => {
  const {property, operator, value} = filter;

  return (
    <div className='flex space-x-1'>
      <InputGroup className='grid grid-cols-3 grow'>
        <Select
          size='sm'
          placeholder='Field'
          value={property}
        >
          {([] as Array<keyof T>).map(option=>(
            <Option key={option.toString()} value={option}>{option.toString()}</Option>
          ))}
        </Select>
        <Select
          size='sm'
          placeholder='Operator'
          value={operator}
        >
          {Object.values(PropertyFilterOperator).map(option=>(
            <Option key={option.toString()} value={option}>{option.toString()}</Option>
          ))}
        </Select>
        <Input
          size='sm'
          placeholder='Value'
          value={value}
        />
      </InputGroup>
      <IconButton
        size='sm'
        iconElement={TrashIcon}
        onClick={()=>{

        }}
      />
    </div>
  );
};

export default Property;