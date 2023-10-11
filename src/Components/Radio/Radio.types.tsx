import { InputHTMLAttributes } from "react"
import { ColorType } from "../../@types/Color"

export type RadioProps = {
    color?: ColorType
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'type' | 'size'>
