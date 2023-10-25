import {FC, useMemo} from "react";
import {AvatarProps} from "./Avatar.types.ts";
import {twMerge} from "tailwind-merge";

const Avatar: FC<AvatarProps> = ({ size, className, src, placeholder, style, ...props}) => {


    const avatarSize = useMemo<string>(() => {
        switch (size) {
            case "xs":
                return "w-7 h-7 ";
            case "sm":
                return "w-8 h-8 ";
            default:
                return "w-9 h-9 ";
            case "lg":
                return "w-12 h-12 ";
            case "xl":
                return "w-14 h-14";
            case "2xl":
                return "w-16 h-16 ";
            case "3xl":
                return "w-20 h-20 ";
            case "4xl":
                return "w-24 h-24 ";
            case "5xl":
                return "w-28 h-28 ";
            case "6xl":
                return "w-32 h-32  ";
            case "7xl":
                return "w-40 h-40 ";
            case "8xl":
                return "w-52 h-52 ";
            case "9xl":
                return "w-72 h-72 ";
        }
    }, [size]);

    return (
        <div
            {...props}
            className={twMerge(
                "rounded bg-gray-100",
                avatarSize,
                placeholder && `flex items-center justify-center uppercase m-auto font-medium text-gray-500 ${avatarSize} text-${size}`,
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
