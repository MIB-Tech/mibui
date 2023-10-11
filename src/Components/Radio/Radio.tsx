import { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { RadioProps } from "./Radio.types";

const Radio: FC<RadioProps> = ({ color = 'primary', className, ...props }) => {
    const radioColors = useMemo<string>(() => {
        switch(color) {
            case 'secondary':
                return 'accent-gray-500';
            case 'success':
                return 'accent-emerald-600';
            case 'info':
                return 'accent-blue-500';
            case 'error':
                return 'accent-red-500';
            case 'warning':
                return 'accent-amber-600';
            default:
                return 'accent-violet-500';
        }
    }, [color]);

    return(
        <input
            type="radio"
            className={twMerge(
                className,
                radioColors
            )}
            {...props}
        />
    )
}

export default Radio;
