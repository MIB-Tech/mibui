import { useVariantStyles } from "../../hooks/UseVariantStyles";
import { SwitchProps } from "./Switch.types";
import { FC, useMemo } from "react";

const Switch: FC<SwitchProps> = ({ size, color, ...props }) => {
    const classNames = useVariantStyles({color});
    const calcSize = useMemo(() => {
        const oct_base = 8;
        let sizeType = 1; // small = 0, default = 1, large = 2
        if (size === "sm") sizeType = 0;
        if (size === "lg") sizeType = 2;
        const objSize = {
            switch: {
                w: ((oct_base * 2) * sizeType) + 44,
                h: (oct_base * sizeType) + 24
            },
            checked_after: {
                w: (oct_base * sizeType) + 16,
                h: (oct_base * sizeType) + 16,
                ml: (oct_base * sizeType) + 20
            }
        };
        return objSize;
    }, [size]);

    const styles = {
        root: `mr-2 mt-[0.3rem] h-[${calcSize.switch.h}px] w-[${calcSize.switch.w}px] appearance-none rounded-full p-[4px] ${classNames.background.replace('500', '300')} cursor-pointer outline-none disabled:bg-gray-300 disabled:cursor-not-allowed`,
        after: `after:absolute after:content-[""] after:h-[${calcSize.checked_after.h}px] after:w-[${calcSize.checked_after.w}px] after:mt-0 after:ml-0 after:bg-white disabled:after:bg-slate-50 after:rounded-full after:border-none after:transition-[background-color_0.25s,transform_0.25s] after:z-[2]`,
        checked: `checked:after:content-[""] checked:after:absolute checked:${classNames.background} checked:after:bg-white checked:after:h-[${calcSize.checked_after.h}px] checked:after:w-[${calcSize.checked_after.w}px] checked:after:ml-[${calcSize.checked_after.ml}px] checked:after:mt-[0px] checked:after:transition-[background-color_0.25s,transform_0.25s] checked:after:border-none`,
        focus: ''
    };

    return(
        <input
            className={`${styles.root} ${styles.after} ${styles.checked}`}
            type="checkbox"
            role="switch"
            {...props}
        />
    );
}

export default Switch;
