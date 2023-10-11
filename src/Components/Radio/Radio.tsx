import { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { RadioProps } from "./Radio.types";

const Radio: FC<RadioProps> = ({ color = 'primary', size, className, ...props }) => {
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
                color === 'secondary' ? 'accent-secondary' : `accent-${color}-500`,
            )}
            {...props}
        />
    )
}

export default Radio;
