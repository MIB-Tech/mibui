import {FC} from 'react';
import {Dropdown as MuiDropdown, DropdownProps} from '@mui/base';

const Menu: FC<DropdownProps> = ({children, ...props}) => (
  <MuiDropdown {...props}>
    {children}
  </MuiDropdown>
)

export default Menu