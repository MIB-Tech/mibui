import {Tooltip} from '../Tooltip';
import {FC} from 'react';
import {PopoverProps} from './Popover.types.tsx';
import {twMerge} from 'tailwind-merge';

const Popover: FC<PopoverProps> = ({trigger = 'click', className, children, ...props}) => {
  return (
    <Tooltip
      trigger={trigger}
      className={twMerge('p-3', className)}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default Popover;

