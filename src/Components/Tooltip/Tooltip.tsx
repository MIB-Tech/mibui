import {cloneElement, FC, HTMLAttributes, useMemo, useState} from 'react';
import {TooltipProps} from './Tooltip.types.tsx';
import {Popup} from '@mui/base/Unstable_Popup/Popup';
import {ClickAwayListener, PopupPlacement} from '@mui/base';
import {twMerge} from 'tailwind-merge';

export const POPUP_PLACEMENTS: PopupPlacement[] = [
  'top', 'right', 'bottom', 'left',
  'top-start', 'right-start', 'bottom-start', 'left-start',
  'top-end', 'right-end', 'bottom-end', 'left-end',
];

const Tooltip: FC<TooltipProps> = ({children, trigger = 'hover', disableArrow, content, ...props}) => {
  // const {placement} = props;
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

  const child = useMemo(() => {
    const childProps = {...props};
    if (trigger === 'click') {
      childProps.onClick = e => setAnchor(anchor ? null : e.currentTarget);
    } else {
      childProps.onMouseEnter = e => setAnchor(e.currentTarget);
      childProps.onMouseLeave = () => setAnchor(null);
    }

    return cloneElement<HTMLAttributes<HTMLDivElement>>(children, childProps);
  }, [children, props, trigger, anchor]);

  return (
    <>
      {child}
      <Popup
        {...props}
        open={open}
        anchor={anchor}
        className={twMerge(
          'z-10 rounded text-sm px-3 py-2 border border-solid border-gray-200 shadow-md bg-white',
          !disableArrow && 'relative'
        )}
        offset={5}
      >
        <ClickAwayListener
          onClickAway={() => {
            if (open) {
              setAnchor(null);
            }
          }}
        >
          <div>
            {content}
            {/*{!disableArrow && (*/}
            {/*  <TooltipArrow placement={placement}/>*/}
            {/*)}*/}
          </div>
        </ClickAwayListener>
      </Popup>

    </>
  )
    ;
};

export default Tooltip;
