import {Tooltip} from '../Tooltip';
import {FC} from "react";
import {PopoverProps} from "./Popover.types.tsx";

const Popover: FC<PopoverProps> = ({trigger = 'click', ...props}) => {
    return (
        <Tooltip trigger={trigger} {...props} />
    )
}

export default Popover;

