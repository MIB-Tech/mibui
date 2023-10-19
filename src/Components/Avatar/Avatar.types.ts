import {HTMLAttributes, ImgHTMLAttributes} from "react";
import {SizingType} from "../../@types/Sizing.ts";

export type AvatarProps = {
  size?: SizingType
} & (
  { src: string } | { placeholder: string }
  ) & HTMLAttributes<HTMLDivElement> & Pick<ImgHTMLAttributes<HTMLImageElement>, 'src'>
