import { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { RadioProps } from "./Radio.types";

const Radio: FC<RadioProps> = ({ color = 'primary', size, className, ...props }) => {
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
    
    const radioSize = useMemo<string>(() => {
        switch (size) {
            case 'md':
                return 'w-5 h-5';
            case 'lg':
                return 'w-6 h-6';
            default:
                return 'w-4 h-4';
        }
    }, [size]);

    return(
        <input
            type="radio"
            className={twMerge(
                className,
                radioSize,
                radioColors
            )}
            {...props}
        />
    )
}

export default Radio;
