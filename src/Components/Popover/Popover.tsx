import * as React from 'react';
import { Unstable_Popup as Popup} from "@mui/base";
import { Button } from "../Button";
import { FC, MouseEvent } from "react";
import { PopupOwnProps } from "@mui/base";

// Define a custom PopupBody component
const PopupBody: FC = ({ children }) => {
    return (
        <div className="popup-body">
            {children}
        </div>
    );
};

interface PopProps extends PopupOwnProps {
    trigger: 'click' | 'mouseenter';
    Content : string ;
    Title :string ;
}

export const Popover: FC<PopProps> = ({
                                          placement,
                                          trigger,
                                          Content,
                                          Title,
                                          children,
                                          ...props
                                      }) => {
    const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        if (trigger === 'click') {
            setAnchor(anchor ? null : event.currentTarget);
        }
    };

    const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
        if (trigger === 'mouseenter') {
            setAnchor(anchor ? null : event.currentTarget);
        }
    };

    const open = Boolean(anchor);

    return (
        <div>
            <Button
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
            >
                {Title}
            </Button>

            <Popup
                open={open}
                anchor={anchor}
                placement={placement}
                className="bg-white"
                {...props}
            >
                <PopupBody>{Content}</PopupBody>
            </Popup>
        </div>
    );
};
