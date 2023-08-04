import {HTMLAttributes} from "react";
import {ButtonVariant, ColorVariantEnum, SizeEnum} from "../Button/Button.types.tsx";



export type BadgeProps = {
    variant?: ButtonVariant
    color?: ColorVariantEnum
    outline?: boolean
    size?: SizeEnum
    closing?: boolean
} & HTMLAttributes<HTMLSpanElement>