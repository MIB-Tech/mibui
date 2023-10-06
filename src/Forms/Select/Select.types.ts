import {SelectProps as MuiSelectProps, OptionProps as MuiOptionProps} from '@mui/base';
import {ElementType} from 'react';
import {InputProps, InputRootProps} from '../Input/Input.types.ts';
import {SelectTypeMap} from '@mui/base/Select/Select.types';

export type DefaultComponent<
OptionValue extends {},
Multiple extends boolean
> = SelectTypeMap<OptionValue, Multiple>['defaultComponent']
export type SelectProps<
  OptionValue extends {},
  Multiple extends boolean,
  RootComponentType extends ElementType = DefaultComponent<OptionValue, Multiple>
> = MuiSelectProps<OptionValue, Multiple, RootComponentType> & Pick<InputRootProps, 'size'> & Pick<InputProps, 'error' | 'readOnly' | 'disabled'>

export type OptionProps<
  OptionValue extends {},
  RootComponentType extends ElementType
> = MuiOptionProps<OptionValue, RootComponentType>