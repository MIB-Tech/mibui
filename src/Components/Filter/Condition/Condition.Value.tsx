import {Input} from '../../../Forms';
import {useFilterContext} from '../Filter.Context.tsx';
import {InputProps} from '../../../Forms/Input/Input.types.ts';

export const ConditionValue = <T extends {}>({...props}: InputProps) => {
  const {size} = useFilterContext<T>();

  return (
    <Input
      name='value'
      size={size}
      placeholder='Value'
      {...props}
    />
  );
};