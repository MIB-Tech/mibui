import {HTMLAttributes} from "react";
import {SizingType} from "../../@types/Sizing.ts";
import {ColorType} from "../../@types/Color.ts";

export type ProgressProps = {
  state: number;
  size?: SizingType;
  color?: ColorType;
  label?: boolean;
} & HTMLAttributes<HTMLDivElement>

