import { forwardRef } from 'react';
import { Switch as BaseSwitch } from '@mui/base/Switch';
import { twMerge } from 'tailwind-merge';
import { SwitchProps } from './Switch.types';
import { useVariantStyles } from '../../hooks/UseVariantStyles';

const Switch = forwardRef<HTMLSpanElement, SwitchProps>(({size = 'md', color = 'primary', ...props}, ref) => {
    const classNames = useVariantStyles({color});
    const sizeProps = {
        root_width: {
            sm: 'w-10',
            md: 'w-12',
            lg: 'w-14'
        },
        root_height: {
            sm: 'h-6',
            md: 'h-7',
            lg: 'h-8'
        },
        thumb_width: {
            sm: 'w-4',
            md: 'w-5',
            lg: 'w-6'
        },
        thumb_height: {
            sm: 'h-4',
            md: 'h-5',
            lg: 'h-6'
        },
        thumb_checked: {
            sm: 'left-5',
            md: 'left-6',
            lg: 'left-7'
        }
    };
    
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
                            `relative inline-block ${sizeProps.root_width[size]} ${sizeProps.root_height[size]} m-2.5 ${ownerState.disabled
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
                                ? classNames.background
                                : 'bg-slate-300 dark:bg-slate-600'
                            }`,
                        )
                    };
                },
                thumb: (ownerState) => {
                    props.slotProps?.thumb,
                    ownerState
                    return {
                        className: twMerge(
                            `block ${sizeProps.thumb_width[size]} ${sizeProps.thumb_height[size]} top-1 ${ownerState.checked ? sizeProps.thumb_checked[size] : 'left-1'
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
