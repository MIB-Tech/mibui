import React, {FC} from 'react';
import {Unstable_Popup as Popup} from '@mui/base/Unstable_Popup';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import {TooltipType} from './Tooltip.types.tsx';
import {twMerge} from "tailwind-merge";
import {useVariantStyles} from "../../hooks/UseVariantStyles.ts";

const Tooltip: FC<TooltipType> = ({
                                      children,
                                      content,
                                      placement,
                                      color,
                                      variant,
                                      ...props
                                  }) => {
    const classNames = useVariantStyles({color, variant});
    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };
    const handleClickAway = () => {
        setAnchor(null);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
                <span aria-describedby={id} onClick={handleClick}>
                    {children}
                </span>
                <Popup id={id}
                       open={open}
                       anchor={anchor}
                       placement={placement}>
                    <div className={twMerge(
                            'p-1',
                            classNames.background,
                            classNames.text,
                            props.className
                        )}
                         {...props}>
                        {content}
                    </div>
                </Popup>
            </div>
        </ClickAwayListener>
    );
}

export default Tooltip