import {useMemo} from 'react';
import {SwitchProps} from './Switch.types.ts';

export const resolveSlotProps = (fn: any, args: any) => typeof fn === 'function' ? fn(args) : fn;

export const useThumb = ({size = 'md'}:Pick<SwitchProps, 'size'>) => {
    const sizing = useMemo<number>(() => {
        switch (size) {
            case 'sm':
                return 4;
            case 'md':
                return 5;
            case 'lg':
                return 6;
        }
    }, [size]);

    return {
        sizing,
        sizingClassName: `w-${sizing} h-${sizing}`,
    }
};