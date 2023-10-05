import { SwitchOwnProps } from "@mui/base";
import { ColorType } from "../../@types/Color";
import { SizingType } from "../../@types/Sizing";

export type SwitchProps = {
    color?: ColorType,
    size?: SizingType
} & SwitchOwnProps;
