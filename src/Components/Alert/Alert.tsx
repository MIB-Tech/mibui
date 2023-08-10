import {FC, useMemo, useState} from 'react';
import {AlertProps} from './Alert.types';
import {ButtonVariant, ColorVariantEnum} from '../Button/Button.types.tsx';
import {getSoftColor, getSolidColor} from '../Button/Button.utils.tsx';
import {AiOutlineCloseCircle} from "react-icons/ai";
import Button from "../Button/Button.tsx";
import {twMerge} from "tailwind-merge";

export const Alert: FC<AlertProps> = (
    {
        color = ColorVariantEnum.Primary,
        variant = ButtonVariant.Solid,
        children,
        icon,
        title,
        dismissible,
        className
    }) => {
    const solidColor = getSolidColor(color);
    const softColor = getSoftColor(color);
    const [show, setShow] = useState(true);


    const bgColor = useMemo<string>(() => {
        switch (variant) {
            case ButtonVariant.Solid:
                return solidColor;
            case ButtonVariant.Soft:
                return softColor;
            case ButtonVariant.Clean:
                return 'white';
        }
    }, [solidColor, softColor, variant]);

    const textColor = useMemo<string>(() => {
        return variant === ButtonVariant.Solid ? 'white' : solidColor;
    }, [solidColor, variant]);

    if (!show) {
        return <></>
    }

    return (
        <div
            className={twMerge(
                `p-4 rounded flex items-start bg-${bgColor} text-${textColor}`,
                className
            )}
            role="alert"
        >
            {icon && (<div className="mr-4">{icon}</div>)}
            <div>
                {title && (<div className="font-bold">{title}</div>)}
                {children}
            </div>
            {dismissible && (
                <Button
                    variant={variant}
                    color={color}
                    onClick={() => setShow(!show)}
                    className='ml-auto'
                >
                    <AiOutlineCloseCircle/>
                </Button>
            )}
        </div>
    );
};
