// Alert.types.tsx

import {ButtonVariant, ColorVariantEnum} from "../Button/Button.types.tsx";
import {HTMLAttributes, ReactNode} from "react";


export type AlertProps = {
    color?: ColorVariantEnum;
    variant?: ButtonVariant;
    icon?: ReactNode;
    title: ReactNode;
    dismissible?: boolean
} & Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'title'>