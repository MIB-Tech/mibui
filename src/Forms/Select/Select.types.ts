import {OptionProps as MuiOptionProps, SelectProps as MuiSelectProps} from '@mui/base';
import {ElementType} from 'react';
import {InputProps, InputRootProps} from '../Input/Input.types.ts';
import {SelectTypeMap} from '@mui/base/Select/Select.types';

export type DefaultSelectRootComponent<
OptionValue extends {},
Multiple extends boolean
> = SelectTypeMap<OptionValue, Multiple>['defaultComponent']
export type SelectProps<
  OptionValue extends {},
  Multiple extends boolean,
  RootComponentType extends ElementType = DefaultSelectRootComponent<OptionValue, Multiple>
> = MuiSelectProps<OptionValue, Multiple, RootComponentType> & Pick<InputRootProps, 'size'> & Pick<InputProps, 'error' | 'readOnly' | 'disabled'>

export type OptionProps<
  OptionValue extends {},
  RootComponentType extends ElementType
> = MuiOptionProps<OptionValue, RootComponentType>