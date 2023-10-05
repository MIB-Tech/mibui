import { forwardRef, useMemo } from 'react';
import { Switch as BaseSwitch } from '@mui/base/Switch';
import { twMerge } from 'tailwind-merge';
import { SwitchProps } from './Switch.types';

const Switch = forwardRef<HTMLSpanElement, SwitchProps>(({size, color = 'primary', ...props}, ref) => {
    console.log(color);
    const sizing = useMemo(() => {
        const base_qtz = 1, base_oct = 2;
        let multiplier = 1;
        if (size === 'sm') multiplier = 0;
        if (size === 'lg') multiplier = 2;
        return {
            root: {
                width: ((multiplier * base_oct) + 10), // 10
                height: ((multiplier * base_qtz) + 6) // 6
            },
            thumb: {
                width: ((multiplier * base_qtz) + 4), // 4
                height: ((multiplier * base_qtz) + 4) // 4
            },
            checked_thumb: {
                left: ((multiplier * base_qtz) + 5) // 5
            }
        };
    }, [size]);
    
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
                            `relative inline-block w-${sizing.root.width} h-${sizing.root.height} m-2.5 ${ownerState.disabled
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
                            `${ownerState.disabled
                                ? 'cursor-not-allowed opacity-40'
                                : 'cursor-pointer'
                            } absolute w-full h-full top-0 left-0 opacity-0 z-10 m-0`,
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
                            `block w-${sizing.thumb.width} h-${sizing.thumb.height} top-1 ${ownerState.checked ? `left-${sizing.checked_thumb.left}` : 'left-1'
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
