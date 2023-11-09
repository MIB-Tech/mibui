import {Slider as MuiSlider} from '@mui/base/Slider';
import {CustomSliderProps} from './Slider.types.tsx';
import {useMemo} from 'react';
import {twMerge} from 'tailwind-merge';
import {getColorClassName} from '../../Components/Button/Button.utils.tsx';
import {resolveSlotProps, useThumb} from '../../Components/Switch/Switch.utils.ts';

const Slider = ({size, color, display = 'hover', slots, slotProps, ...props}: CustomSliderProps) => {
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
							`relative w-full inline-block cursor-pointer rounded-full text-${solid} bg-${light} h-${sliderSizing}`,
							ownerState.disabled && 'opacity-50 cursor-not-allowed',
							resolvedSlotProps?.className
						)
					};
				},
				rail: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.rail, ownerState);

					return {
						...ownerState,
						className: twMerge(
							'block absolute w-full',
							resolvedSlotProps?.className
						),
					};
				},
				track: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.track, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							`h-full block absolute rounded-s bg-${solid} `,
							resolvedSlotProps?.className
						),
					};
				},
				thumb: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.thumb, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
							`group bg-white rounded-full border-2 border-${solid}`,
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
							'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
							`rounded-full bg-${light} [&.MuiSlider-markActive]:bg-current`,
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
							'absolute top-5 left-1/2 -translate-x-1/2',
							'group text-sm',
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
							'absolute -translate-y-8 inset-0 flex justify-center',
							(disabled || display === 'none') && 'invisible',
							!disabled && display === 'hover' && twMerge(
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
