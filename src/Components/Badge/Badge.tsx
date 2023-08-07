import {ButtonVariant, ColorVariantEnum, SizeEnum, WeightEnum} from "../Button/Button.types.tsx";
import {FC, useMemo} from "react";
import {BadgeProps} from "./Badge.types.ts";
import {getColorClassName} from "../Button/Button.utils.tsx";
import XMarkIcon from "@heroicons/react/20/solid/XMarkIcon";


export const Badge: FC<BadgeProps> = ({
                                          // outline,
                                          size,
                                          variant = ButtonVariant.Hard,
                                          color = ColorVariantEnum.Primary,
                                          closing = false,
                                          children,
                                          ...props
                                      }) => {

    const hardColorWeight = WeightEnum.W500;
    const softColorWeight = WeightEnum.W100;
    const hardColor = getColorClassName({color, weight: hardColorWeight});
    const softColor = color === ColorVariantEnum.Black ? 'gray-300' : getColorClassName({color, weight: softColorWeight})

    const bgColor = useMemo<string>(() => {
        switch (variant) {
            case ButtonVariant.Hard:
                return hardColor
            case ButtonVariant.Soft:
                return softColor
            case ButtonVariant.Clean:
                return 'white'
        }
    }, [hardColor, softColor, variant])

    const textColor = useMemo<string>(() => {
        return variant === ButtonVariant.Hard ? 'white' : hardColor;
    }, [hardColor, variant])
    const spacingClassName = useMemo<string>(() => {
        switch (size) {
            case SizeEnum.Small:
                return `text-xs px-1.5 py-0.5`
            case SizeEnum.Large:
                return `px-3 py-1`
            default:
                return `text-sm px-2.5 py-0.5`
        }
    }, [size])


    return (
        <span
            {...props}
            className={
                `inline-flex items-center justify-center rounded bg-${bgColor} ${spacingClassName} font-medium text-${textColor}`
            }
        >
            {children}
            {closing && (
                <XMarkIcon className={`w-4 h-4 ml-1 rounded hover:bg-${textColor} hover:text-${bgColor} cursor-pointer`}/>
            )}
        </span>
    );
};


