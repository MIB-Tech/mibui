import {ColorType} from "../../@types/Color.ts";
import {InputHTMLAttributes} from "react";
import {SizingType} from "../../@types/Sizing.ts";


export type CheckboxProps = {
  color?: ColorType
  size?: SizingType
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'color'|'type'|'size'>
