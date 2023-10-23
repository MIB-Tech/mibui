import {HTMLAttributes, ImgHTMLAttributes} from "react";
import {SizingType} from "../../@types/Sizing.ts";

export type SizingTypePlaceholder = typeof SIZING[number]
export type AvatarProps = {
    sizePlaceholder?: SizingTypePlaceholder;
    size?: SizingType
} & (
    {
        src: string
    } | {
    placeholder: string
}
    ) & HTMLAttributes<HTMLDivElement> & Pick<ImgHTMLAttributes<HTMLImageElement>, 'src'>


export const SIZING = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl'
] as const;