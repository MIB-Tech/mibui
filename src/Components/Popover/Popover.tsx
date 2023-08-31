import {Tooltip} from '../Tooltip';
import {FC} from 'react';
import {PopoverProps} from './Popover.types.tsx';

const Popover: FC<PopoverProps> = ({trigger = 'click', children, ...props}) => {
  return (
    <Tooltip trigger={trigger} {...props} >
      {children}
    </Tooltip>
  );
};

export default Popover;

