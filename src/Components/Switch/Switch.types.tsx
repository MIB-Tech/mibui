import { ColorType } from "../../@types/Color";
import { SizingType } from "../../@types/Sizing";

export type SwitchProps = {
    color?: ColorType,
    size?: SizingType,
    rounded?: boolean,
    disabled?: boolean,
    outline?: boolean
};