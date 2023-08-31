import {SelectProps} from './Select.types.ts';
import {Autocomplete} from '../Autocomplete';

const Select = <Value, Multiple extends boolean>({...props}: SelectProps<Value, Multiple>) => {

  return (
    <Autocomplete
      {...props}
      searchDisabled
    />
  );
};

export default Select;