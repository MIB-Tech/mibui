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
) => (
  <Popup
    trigger={trigger}
    {...props}
    className={twMerge('px-1.5 py-1 text-sm', className)}
  >
    {children}
  </Popup>
)

export default Tooltip;
