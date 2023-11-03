import {SliderProps} from "@mui/base/Slider";
import {ColorType} from "../../@types/Color.ts";
import {SizingType} from "../../@types/Sizing.ts";

export type CustomSliderProps = SliderProps & {
	size?: SizingType;
	color?: ColorType;
	valueLabelDisplay?: 'hover' | 'always'|'none' ;
};

