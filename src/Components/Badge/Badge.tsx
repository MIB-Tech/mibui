import {ButtonVariant, ColorVariantEnum, SizeEnum, WeightEnum} from "../Button/Button.types.tsx";
import {FC, useMemo} from "react";
import {BadgeProps} from "./Badge.types.ts";
import {getColorClassName, SOFT_WEIGHT, SOLID_WEIGHT} from "../Button/Button.utils.tsx";
import XMarkIcon from "@heroicons/react/20/solid/XMarkIcon";
import {twMerge} from "tailwind-merge";


export const Badge: FC<BadgeProps> = ({
                                          // outline,gt
                                          size,
                                          variant = ButtonVariant.Solid,
                                          color = ColorVariantEnum.Primary,
                                          onClose,
                                          className,
                                          children,
                                          ...props
                                      }) => {

    const hardColorWeight = WeightEnum.W500;
    const softColorWeight = WeightEnum.W100;
    const hardColor = getColorClassName({color, weight: hardColorWeight});
    const softColor = color === ColorVariantEnum.Black ? 'gray-300' : getColorClassName({color, weight: softColorWeight})

    const bgColor = useMemo<string>(() => {
        switch (variant) {
            case ButtonVariant.Solid:
                return hardColor
            case ButtonVariant.Soft:
                return softColor
            case ButtonVariant.Clean:
                return 'white'
        }
    }, [hardColor, softColor, variant])

    const textColor = useMemo<string>(() => {
        return variant === ButtonVariant.Solid ? 'white' : hardColor;
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

    const hoverBgColor = useMemo<string>(() => {
        switch (variant) {
            case ButtonVariant.Solid:
                return color === ColorVariantEnum.Black ? 'gray-700' : getColorClassName({color, weight: SOLID_WEIGHT + 100})
            case ButtonVariant.Soft:
                return color === ColorVariantEnum.Black ? 'gray-400' : getColorClassName({color, weight: SOFT_WEIGHT + 100})
            case ButtonVariant.Clean:
                return softColor
        }
    }, [color, softColor, variant])


    return (
        <span
            {...props}
            className={twMerge(
                `inline-flex items-center justify-center rounded bg-${bgColor} ${spacingClassName} text-${textColor}`,
                className
            )}
        >
            {children}
            {onClose && (
                <XMarkIcon
                    className={`w-4 h-4 ml-1 rounded hover:bg-${hoverBgColor} cursor-pointer`}
                    onClick={onClose}
                />
            )}
        </span>
    );
};


