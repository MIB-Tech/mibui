import {HTMLAttributes} from 'react';
import {SizingType} from '../../@types/Sizing.ts';

export type ListProps = {

} & HTMLAttributes<HTMLUListElement>

export type ListItemProps = {
  active?: boolean
  size?: SizingType
} & HTMLAttributes<HTMLLIElement>