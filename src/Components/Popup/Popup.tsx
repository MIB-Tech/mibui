import {cloneElement, FC, HTMLAttributes, useMemo, useState} from 'react';
import {PopupProps} from './Popup.types.tsx';
import {Popup as BasePopup} from '@mui/base/Unstable_Popup/Popup';
import {ClickAwayListener} from '@mui/base';
import {twMerge} from 'tailwind-merge';
import {useControlledState} from './Popup.utils.ts';


const Popup: FC<PopupProps> = (
  {
    children,
    trigger = 'hover',
    content,
    className,
    open: controlledOpen,
    setOpen: setControlledOpen,
    ...props
  }
) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useControlledState({
    open: controlledOpen,
    setOpen: setControlledOpen,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (open) setOpen(false);
  };

  const eventHandlers = trigger === 'click'
    ? {onClick: handleOpen}
    : {onMouseEnter: handleOpen, onMouseLeave: handleClose};

  const child = useMemo(() => {
    const childProps = {
      ...props,
      ref: setAnchor,
      ...eventHandlers,
    };

    return cloneElement<HTMLAttributes<HTMLDivElement>>(children, childProps);
  }, [children, props, eventHandlers]);

  return (
    <>
      {child}
      <BasePopup
        {...props}
        open={open}
        anchor={anchor}
        className={twMerge('z-10 rounded bg-white border drop-shadow', className)}
        offset={5}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            {content}
          </div>
        </ClickAwayListener>
      </BasePopup>
    </>
  );
};

export default Popup;
