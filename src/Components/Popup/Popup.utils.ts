import {PopupPlacement} from './Popup.types.tsx';
import {useState} from 'react';
import {TooltipProps} from '../Tooltip/Tooltip.types.tsx';

export const POPUP_PLACEMENTS: PopupPlacement[] = [
  'top', 'right', 'bottom', 'left',
  'top-start', 'right-start', 'bottom-start', 'left-start',
  'top-end', 'right-end', 'bottom-end', 'left-end',
];

export const useControlledState = (
  {
    open: controlledOpen,
    setOpen: setControlledOpen
  }: Pick<TooltipProps, 'open' | 'setOpen'>
) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState<TooltipProps['open']>(controlledOpen);
  const open = typeof controlledOpen === 'boolean' ? controlledOpen : (uncontrolledOpen || false);
  const setOpen = typeof setControlledOpen !== 'undefined' ? setControlledOpen : setUncontrolledOpen;

  return [open, setOpen] as [boolean, (open: boolean) => void];
};
