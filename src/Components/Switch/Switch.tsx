import {useVariantStyles} from '../../hooks/UseVariantStyles';
import {SwitchProps} from './Switch.types';
import {FC, useMemo} from 'react';

const Switch: FC<SwitchProps> = ({ size, color, ...props }) => {
    const classNames = useVariantStyles({color});
    const calcSize = useMemo(() => {
        const oct_base = 1;
        let sizeType = 1; // small = 0, default = 1, large = 2
        if (size === "sm") sizeType = 0;
        if (size === "lg") sizeType = 2;
        const objSize = {
            switch: {
                w: ((oct_base * 2) * sizeType) + 12,
                h: (oct_base * sizeType) + 6
            },
            checked_after: {
                w: (oct_base * sizeType) + 5,
                h: (oct_base * sizeType) + 5,
                ml: (4 * sizeType) + 22,
            }
        };
        return objSize;
    }, [size]);

    const styles = {
        root: `mr-2 mt-[0.3rem] h-${calcSize.switch.h} w-${calcSize.switch.w} appearance-none rounded-full ${props.disabled ? 'bg-neutral-300' : 'bg-secondary-300'} hover:cursor-pointer disabled:cursor-not-allowed`,
        before: `before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-['']`,
        after: `after:absolute after:z-[2] after:mt-[1.6px] after:ml-[2.6px] after:h-${calcSize.checked_after.h} after:w-${calcSize.checked_after.w} after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-['']`,
        checked: `checked:${classNames.background} checked:after:absolute checked:after:z-[2] checked:after:mt-[1.6px] checked:after:ml-[${calcSize.checked_after.ml}px] checked:after:h-${calcSize.checked_after.h} checked:after:w-${calcSize.checked_after.w} checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-['']`,
        focus_after: `focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-${calcSize.checked_after.h} focus:after:w-${calcSize.checked_after.w} focus:after:rounded-full focus:after:content-['']`,
    };

    return(
        <input
            className={`${styles.root} ${styles.before} ${styles.after} ${styles.checked} ${styles.focus_after}`}
            type="checkbox"
            role="switch"
            {...props}
        />
    );
}

export default Switch;
