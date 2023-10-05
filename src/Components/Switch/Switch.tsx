import {SwitchProps} from './Switch.types';
import {FC, useMemo} from 'react';
import { Switch as MuiSwitch, SwitchOwnerState, switchClasses } from "@mui/base/Switch";
import { styled } from "@mui/system";
import { useVariantStyles } from '../../hooks/UseVariantStyles';
import { twMerge } from 'tailwind-merge';

const Switch: FC<SwitchProps> = ({ size, color = 'primary', ...props }) => {
    const classNames = useVariantStyles({color});
    const slotProps = {
        track: (ownerState: SwitchOwnerState) => ({
            className: twMerge(
                ownerState.checked ? classNames.background : classNames.background.replace('500', '300'))
        })
    };
    const sizing = useMemo(() => {
        const base_qtz = 4, base_oct = 8;
        let multiplier = 1;
        if (size === 'sm') multiplier = 0;
        if (size === 'lg') multiplier = 2;
        return {
            root: {
                width: ((multiplier * base_oct) + 40), // 40
                height: ((multiplier * base_qtz) + 24) // 24
            },
            thumb: {
                width: ((multiplier * base_qtz) + 16), // 16
                height: ((multiplier * base_qtz) + 16) // 16
            },
            checked_thumb: {
                left: ((multiplier * base_qtz) + 20) // 20
            }
        };
    }, [size]);

    const Root = styled('span')(() => `
        font-size: 0;
        position: relative;
        display: inline-block;
        width: ${sizing.root.width}px;
        height: ${sizing.root.height}px;
        margin: 10px;
        cursor: pointer;
        &.${switchClasses.disabled} {
            opacity: 0.4;
            cursor: not-allowed;
        }
        & .${switchClasses.track} {
            border-radius: 16px;
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
            border: 1px solid rgb(200, 200, 200);
            box-shadow: 2px 2px 2px rgb(225, 225, 225);
        }
        & .${switchClasses.thumb} {
            display: block;
            width: ${sizing.thumb.width}px;
            height: ${sizing.thumb.height}px;
            top: 4px;
            left: 4px;
            border: 1px solid rgb(225, 225, 225);
            border-radius: 16px;
            background-color: #fff;
            position: relative;
            box-shadow: 1px 1px 1px rgb(120, 120, 120);
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 120ms;
        }
        &.${switchClasses.focusVisible} .${switchClasses.thumb} {
            box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
        }
        &.${switchClasses.checked} {
            .${switchClasses.thumb} {
                left: ${sizing.checked_thumb.left}px;
                top: 4px;
                background-color: #fff;
            }
        }
        & .${switchClasses.input} {
            cursor: inherit;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: 1;
            margin: 0;
        }
        `
    );

    return(
        <MuiSwitch
            slots={{ root: Root }}
            slotProps={slotProps}
            {...props}
        />
    );
}

export default Switch;
