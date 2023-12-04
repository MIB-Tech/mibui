import { InputHTMLAttributes } from "react"
import { ColorType } from "../../@types/Color"
import { SizingType } from "../../@types/Sizing"

export type RadioProps = {
    color?: ColorType,
    size?: SizingType
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'type' | 'size'>
