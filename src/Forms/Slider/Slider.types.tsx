import {SliderProps} from '@mui/base/Slider';
import {ColorType} from '../../@types/Color.ts';
import {SizingType} from '../../@types/Sizing.ts';

export const DISPLAYS = [
	'none',
	'hover',
	'always',
] as const;
export type DisplayType = typeof DISPLAYS[number]
export type CustomSliderProps = SliderProps & {
	size?: SizingType;
	color?: ColorType;
	tooltipDisplay?: DisplayType;
};

