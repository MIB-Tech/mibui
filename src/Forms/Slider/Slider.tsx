import {Slider as MuiSlider} from '@mui/base/Slider';
import {CustomSliderProps} from "./Slider.types.tsx";
import {useMemo} from "react";
import {twMerge} from "tailwind-merge";

const Slider = ({
									size,
									color = "primary",
									valueLabelDisplay = 'hover',
									...props
								}: CustomSliderProps) => {

	const sliderClasses = useMemo<string>(() => {
		switch (size) {
			case 'sm':
				return 'h-1';
			case 'lg':
				return 'h-3';
			default:
				return 'h-2';
		}
	}, [size]);
	const thumbClassName = useMemo<string>(() => {
		switch (size) {
			case 'sm':
				return 'w-4 h-4';
			case 'lg':
				return 'w-6 h-6';
			default:
				return 'w-5 h-5';
		}
	}, [size]);
	const markClassName = useMemo<string>(() => {
		switch (size) {
			case 'sm':
				return 'w-2 h-2';
			case 'lg':
				return 'w-4 h-4';
			default:
				return 'w-3 h-3';
		}
	}, [size]);
	const displayValueClassName = useMemo<string>(() => {
		switch (valueLabelDisplay) {
			case 'always':
				return 'visible';
			case 'hover':
				return 'invisible';
			case 'none':
				return 'hidden';
		}
	}, [valueLabelDisplay]);


	return (

		<MuiSlider
			slots={{
				valueLabel: ({children}) => {
					//console.log(props);

					return (

						<span className={twMerge(displayValueClassName, `absolute  text-center group-hover:visible -ml-1.5`)}>

							<div
								className={"group-hover:text-center group-hover: -mt-8"}>
								{`${children}`}
							</div>
						</span>);
				}

			}}
			//defaultValue={50} vers documentation
			{...props}
			slotProps={{
				root: (ownerState) => {

					return {
						...props.slotProps?.root,
						className: twMerge(sliderClasses, `  w-full py-0.5 px-1 inline-block relative touch-none`,
							ownerState.disabled ? 'opacity-50 cursor-default cursor-not-allowed text-current group-hover:hidden ' :
								`hover:opacity-100 cursor-pointer text-${color}-600`)
					};
				}, rail: () => {
					return {
						...props.slotProps?.rail,
						className: twMerge(sliderClasses, `block absolute w-full rounded-sm bg-current opacity-50 `),
					};
				}, track: () => {
					return {
						...props.slotProps?.track, className: twMerge(sliderClasses, `block absolute rounded-s bg-current `),
					};
				}, thumb: () => {
					return {
						...props.slotProps?.thumb, className: twMerge(thumbClassName, `group absolute  
						 -ml-1 -top-1 box-border rounded-full outline-0 border-2 border-solid
						 border-current bg-white hover:shadow-${color}-400/50 
						 active:shadow-${color}-400/50`, ''),
					};
				}, mark: () => {

					return {
						...props.slotProps?.mark,
						className: twMerge(markClassName, `absolute  inset-0 rounded-full bg-${color}-400 [&.MuiSlider-markActive]:bg-current `)
					};

				}, markLabel: () => {
					return {
						...props.slotProps?.markLabel, className: `absolute mt-3 text-sm  `,
					};
				}, valueLabel: () => {
					return {
						...props.slotProps?.valueLabel, className: twMerge(`absolute mt-5 text-lg bg-warning-900`)
					};
				},

			}}

		/>)
}
export default Slider
