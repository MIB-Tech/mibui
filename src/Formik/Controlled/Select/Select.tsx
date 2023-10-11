import {Select as UncontrolledSelect} from '../../../Forms';
import {Props} from './Select.types.tsx';
import {ElementType} from 'react';
import {DefaultSelectRootComponent} from '../../../Forms/Select/Select.types.ts';
import {useField} from 'formik';

const Select = <
  OptionValue extends {},
  Multiple extends boolean,
  RootComponentType extends ElementType = DefaultSelectRootComponent<OptionValue, Multiple>
>({name, ...props}: Props<OptionValue, Multiple, RootComponentType>) => {
  const [
    {value},
    {error},
    {setValue, setTouched}
  ] = useField(name);

  return (
    <UncontrolledSelect
      {...props}
      value={value}
      onChange={async (_, value) => {
        await setValue(value)
        await setTouched(true)
      }}
      error={error}
    />
  );
};

export default Select;