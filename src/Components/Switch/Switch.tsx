import {SwitchProps} from './Switch.types';
import {FC} from 'react';
import { Switch as MuiSwitch, SwitchOwnerState, switchClasses } from "@mui/base/Switch";
import { styled } from "@mui/system";
import { useVariantStyles } from '../../hooks/UseVariantStyles';
import { twMerge } from 'tailwind-merge';

const Switch: FC<SwitchProps> = ({
    color = 'primary',
    ...props
    }) => {
    const classNames = useVariantStyles({color});

    const slotProps = {
        track: (ownerState: SwitchOwnerState) => ({
            className: twMerge(
                ownerState.checked ? classNames.background : classNames.background.replace('500', '300')
            )
        }),
    };

    const Root = styled('span')(() => `
        font-size: 0;
        position: relative;
        display: inline-block;
        width: 40px;
        height: 24px;
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
        }
        & .${switchClasses.thumb} {
            display: block;
            width: 16px;
            height: 16px;
            top: 4px;
            left: 4px;
            border-radius: 16px;
            background-color: #fff;
            position: relative;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 120ms;
        }
        &.${switchClasses.focusVisible} .${switchClasses.thumb} {
            box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
        }
        &.${switchClasses.checked} {
            .${switchClasses.thumb} {
                left: 20px;
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
            id="defaultSwitch"
            slots={{ root: Root }}
            slotProps={slotProps}
            {...props}
        />
    );
}

export default Switch;
