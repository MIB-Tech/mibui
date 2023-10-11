import {ElementType} from 'react';
import {DefaultSelectRootComponent, SelectProps as UncontrolledSelectProps} from '../../../Forms';
import {FieldProps} from '../Controlled.types.ts';

export type Props<
  OptionValue extends {},
  Multiple extends boolean,
  RootComponentType extends ElementType = DefaultSelectRootComponent<OptionValue, Multiple>
> = & UncontrolledSelectProps<OptionValue, Multiple, RootComponentType>
  & FieldProps