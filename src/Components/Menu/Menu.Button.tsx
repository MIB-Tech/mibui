import {FC} from 'react';
import {MenuToggleButtonProps} from './Menu.types.tsx';
import {Button} from '../Button';
import {MenuToggle} from './index.ts';
import {prepareForSlot} from '@mui/base';

export const ButtonSlot = prepareForSlot(Button);

const MenuButton: FC<MenuToggleButtonProps> = (props) => (
  <MenuToggle
    {...props}
    slots={{
      root: ButtonSlot
    }}
  />
);

export default MenuButton;
