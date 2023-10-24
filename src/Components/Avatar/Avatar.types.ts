import {HTMLAttributes, ImgHTMLAttributes} from "react";

export type SizingType = typeof SIZING[number]
export type AvatarProps = {
    size?: SizingType;
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