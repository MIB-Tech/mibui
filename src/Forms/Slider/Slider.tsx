import {Slider as MuiSlider} from '@mui/base/Slider';
import {CustomSliderProps} from './Slider.types.tsx';
import {useMemo} from 'react';
import {twMerge} from 'tailwind-merge';
import {resolveSlotProps} from '../../Components/Switch/Switch.tsx';

const Slider = ({
									size,
									color = 'primary',
									valueLabelDisplay = 'hover',
									slots,
									slotProps,
									...props
								}: CustomSliderProps) => {
	const sliderClassName = useMemo<string>(() => {
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
							'w-full px-1 inline-block relative touch-none',
							sliderClassName,
							ownerState.disabled ?
								'opacity-50 cursor-not-allowed' :
								`hover:opacity-100 cursor-pointer text-${color}-600`,
							resolvedSlotProps?.className
						)
					};
				},
				rail: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.rail, ownerState);

					return {
						...ownerState,
						className: twMerge(
							'block absolute w-full rounded-sm bg-current opacity-50',
							sliderClassName,
							resolvedSlotProps?.className
						),
					};
				},
				track: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.track, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							'block absolute rounded-s bg-current',
							sliderClassName,
							resolvedSlotProps?.className
						),
					};
				},
				thumb: ownerState => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.thumb, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							'relative absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
							`group bg-white rounded-full border-2 border-${color}-500`,
							`hover:ring-2 hover:ring-${color}-300 active:ring-${color}-300`,
							thumbClassName,
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
							`rounded-full bg-${color}-400 [&.MuiSlider-markActive]:bg-current`,
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
				valueLabel: (ownerState) => {
					const resolvedSlotProps = resolveSlotProps(slotProps?.valueLabel, ownerState);

					return {
						...resolvedSlotProps,
						className: twMerge(
							'absolute -left-1/2 -translate-x-1/2',
							'relative -top-8',
							valueLabelDisplay === 'none' && 'invisible',
							valueLabelDisplay === 'hover' && twMerge(
								'invisible group-hover:visible',
								ownerState?.dragging && 'visible'
							),
							resolvedSlotProps?.className
						)
					};
				},
			}}
		/>);
};
export default Slider;
