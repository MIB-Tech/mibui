import {FC, useMemo} from "react";
import {AvatarProps} from "./Avatar.types.ts";
import {twMerge} from "tailwind-merge";

const Avatar: FC<AvatarProps> = ({size, sizePlaceholder, className, src, placeholder, style, ...props}) => {
    const avatarSize = useMemo<string>(() => {
        switch (size) {
            case "sm":
                return "w-6 h-6";
            default:
                return "w-9 h-9";
            case "lg":
                return "w-12 h-12";
        }
    }, [size]);

    const placeSize = useMemo<string>(() => {
        switch (sizePlaceholder) {
            case "xs":
                return "w-6 h-6";
            case "sm":
                return "w-6 h-6";
            default:
                return "w-9 h-9";
            case "lg":
                return "w-9 h-9";
            case "xl":
                return "w-10 h-10";
            case "2xl":
                return "w-12 h-12";
            case "3xl":
                return "w-16 h-16";
            case "4xl":
                return "w-16 h-16";
            case "5xl":
                return "w-20 h-20";
            case "6xl":
                return "w-28 h-28 ";
            case "7xl":
                return "w-32 h-32 ";
            case "8xl":
                return "w-40 h-40 ";
            case "9xl":
                return "w-48 h-48 ";
        }
    }, [size]);

    return (
        <div
            {...props}
            className={twMerge(
                "rounded bg-gray-100",
                avatarSize,
                placeholder && `flex items-center justify-center uppercase font-medium text-gray-500 ${placeSize} text-${sizePlaceholder}`,
                src && 'bg-cover',
                className
            )}
            style={{
                ...style,
                backgroundImage: src ? `url(${src})` : undefined
            }}
        >
            {placeholder}
        </div>
    );
};

export default Avatar;
