import {FC} from 'react';
import {TooltipProps} from './Tooltip.types.tsx';
import Popup from '../Popup/Popup.tsx';
import {twMerge} from 'tailwind-merge';

const Tooltip: FC<TooltipProps> = (
  {
    children,
    className,
    trigger = 'hover',
    ...props
  }
) => {

  return (
    <Popup
      trigger={trigger}
      {...props}
      className={twMerge('px-3 py-2', className)}
    >
      {children}
    </Popup>
  );
};

export default Tooltip;
