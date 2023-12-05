import {Slider as MuiSlider} from '@mui/base/Slider';
import {CustomSliderProps} from './Slider.types.tsx';
import {useMemo} from 'react';
import {twMerge} from 'tailwind-merge';
import {getColorClassName} from '../../Components/Button/Button.utils.tsx';
import {resolveSlotProps, useThumb} from '../../Components/Switch/Switch.utils.ts';

const Slider = ({size, color, tooltipDisplay = 'hover', slots, slotProps, ...props}: CustomSliderProps) => {
	const solid = color === 'secondary' ? 'gray-600' : getColorClassName({color, weight: 600});
	const light = color === 'secondary' ? 'gray-300' : getColorClassName({color, weight: 300});
	const thumb = useThumb({size});
	const sliderSizing = useMemo<number>(() => thumb.sizing / 2, [size]);
	const markClassName = useMemo<string>(() => {
		const markSizing = sliderSizing + 1;

		return `w-${markSizing} h-${markSizing}`;
	}, [sliderSizing]);

	return (
		<MuiSlider
			{...props}
			slots={{
				valueLabel: ownerState => <span {...ownerState}/>,
				...slots
			}}
			slotProps={{
				root: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.root, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							`relative inline-block cursor-pointer rounded-full text-${solid} bg-${light} `,
							ownerState.disabled && 'opacity-50 cursor-not-allowed',
							ownerState.orientation === 'vertical' ?
								`h-96 w-${sliderSizing}` :
								`w-full h-${sliderSizing}`,
							resolvedSlotProps?.className,
							props.className
						)
					};
				},
				rail: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.rail, ownerState);

					return {
						...ownerState,
						className: twMerge(
							'block absolute',
							ownerState.orientation === 'vertical' ? 'h-full' : 'w-full',
							resolvedSlotProps?.className
						),
					};
				},
				track: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.track, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							`absolute block rounded-s bg-${solid} `,
							ownerState.orientation === 'vertical' ? 'w-full rounded-e' : 'h-full',
							resolvedSlotProps?.className
						),
					};
				},
				thumb: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.thumb, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							'absolute -translate-x-1/2',
							`group bg-white rounded-full border-2 border-${solid}`,
							ownerState.orientation === 'vertical' ?
								'left-1/2 translate-y-1/2' :
								'-translate-y-1',
							!ownerState.disabled && `hover:ring-2 hover:ring-${light}`,
							ownerState.dragging && `ring-2 ring-${light}`,
							thumb.sizingClassName,
							resolvedSlotProps?.className
						),
					};
				},
				mark: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.mark, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							`absolute rounded-full left-1/2 -translate-x-1/2 bg-${light} [&.MuiSlider-markActive]:bg-current`,
							ownerState.orientation === 'vertical' ?
								'translate-y-1/2' :
								'top-1/2 -translate-y-1/2',
							markClassName,
							resolvedSlotProps?.className
						)
					};
				},
				markLabel: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.markLabel, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							'absolute group text-sm',
							ownerState.orientation === 'vertical' ?
								'translate-y-2 right-1/2 -translate-x-1/2' :
								'top-5 left-1/2 -translate-x-1/2',
							resolvedSlotProps?.className
						),
					};
				},
				valueLabel: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.valueLabel, ownerState);
					const {disabled, dragging} = ownerState;

					return {
						...resolvedSlotProps,
						className: twMerge(
							'absolute text-sm',
							ownerState.orientation === 'vertical' ?
								'translate-x-1/2 -translate-y-1 left-5' :
								'-translate-y-8 inset-0 flex justify-center',
							(disabled || tooltipDisplay === 'none') && 'invisible',
							(props.valueLabelFormat && ownerState.orientation === 'vertical') && 'left-1/2',
							!disabled && tooltipDisplay === 'hover' && twMerge(
								'invisible group-hover:visible',
								dragging && 'visible'
							),
							resolvedSlotProps?.className
						)
					};
				},
			}}
		/>
	);
};
export default Slider;
