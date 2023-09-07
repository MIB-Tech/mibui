import {cloneElement, FC, HTMLAttributes, useMemo, useState} from 'react';
import {PopupProps} from './Popup.types.tsx';
import {Popup as BasePopup} from '@mui/base/Unstable_Popup/Popup';
import {ClickAwayListener} from '@mui/base';
import {twMerge} from 'tailwind-merge';
import {Card} from '../Card';

const Popup: FC<PopupProps> = (
  {
    children,
    trigger = 'hover',
    content,
    header,
    footer,
    className,
    ...props
  }
) => {
  // const {placement} = props;
  const [open, setOpen] = useState<boolean>(!!props.open);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  // const open = Boolean(anchor) || props.open;

  const child = useMemo(() => {
    const childProps = {
      ...props,
      ref: setAnchor
    };

    if (trigger === 'click') {
      childProps.onClick = () => setOpen((o) => !o);
    } else {
      childProps.onMouseEnter = () => setOpen(true);
      childProps.onMouseLeave = () => setOpen(false);
    }

    return cloneElement<HTMLAttributes<HTMLDivElement>>(children, childProps);
  }, [children, props, trigger, anchor]);

  return (
    <>
      {child}
      <BasePopup
        {...props}
        open={open}
        anchor={anchor}
        className={twMerge(
          'z-10 rounded text-sm shadow',
          // !disableArrow && 'relative'
        )}
        offset={5}
      >
        <ClickAwayListener
          onClickAway={() => {
            if (open) {
              setOpen(false);
            }
          }}
        >
          <Card
            header={header}
            footer={footer}
            className={twMerge('p-0', className)}
          >
            {content}
            {/*{!disableArrow && (*/}
            {/*  <PopupArrow placement={placement}/>*/}
            {/*)}*/}
          </Card>
        </ClickAwayListener>
      </BasePopup>

    </>
  )
    ;
};

export default Popup;
