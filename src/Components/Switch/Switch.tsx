import { forwardRef, useMemo } from 'react';
import { Switch as BaseSwitch } from '@mui/base/Switch';
import { twMerge } from 'tailwind-merge';
import { SwitchProps } from './Switch.types';

const Switch = forwardRef<HTMLSpanElement, SwitchProps>(({size, color = 'primary', ...props}, ref) => {
    console.log(size);
    console.log(color);
    const sizing = useMemo(() => {
        const base_qtz = 4, base_oct = 8;
        let multiplier = 1;
        if (size === 'sm') multiplier = 0;
        if (size === 'lg') multiplier = 2;
        return {
            root: {
                width: ((multiplier * base_oct) + 40), // 40
                height: ((multiplier * base_qtz) + 24) // 24
            },
            thumb: {
                width: ((multiplier * base_qtz) + 16), // 16
                height: ((multiplier * base_qtz) + 16) // 16
            },
            checked_thumb: {
                left: ((multiplier * base_qtz) + 20) // 20
            }
        };
    }, [size]);
    console.log(sizing);
    return (
        <BaseSwitch
            ref={ref}
            {...props}
            slotProps={{
                ...props.slotProps,
                root: (ownerState) => {
                    props.slotProps?.root,
                    ownerState
                    return {
                        className: twMerge(
                            `relative inline-block w-10 h-6 m-2.5 ${ownerState.disabled
                                ? 'cursor-not-allowed opacity-40'
                                : 'cursor-pointer'
                            }`,
                        )
                    };
                },
                input: (ownerState) => {
                    props.slotProps?.input,
                    ownerState
                    return {
                        className: twMerge(
                            'cursor-inherit absolute w-full h-full top-0 left-0 opacity-0 z-10 m-0',
                        )
                    };
                },
                track: (ownerState) => {
                    props.slotProps?.track,
                    ownerState
                    return {
                        className: twMerge(
                            `absolute block w-full h-full rounded-2xl ${ownerState.checked
                                ? 'bg-purple-500'
                                : 'bg-slate-400 dark:bg-slate-600'
                            }`,
                        )
                    };
                },
                thumb: (ownerState) => {
                    props.slotProps?.thumb,
                    ownerState
                    return {
                        className: twMerge(
                            `block w-4 h-4 top-1 ${ownerState.checked ? 'left-5' : 'left-1'
                            } rounded-2xl ${ownerState.focusVisible
                                ? `${ownerState.checked ? 'bg-white' : 'bg-slate-500'
                                } shadow-outline-switch`
                                : 'bg-white'
                            } relative transition-all`,
                        )
                    };
                }
            }}
        />
    );
});

export default Switch;
