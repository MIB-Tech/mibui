import {Alert} from '../Alert/Alert.tsx';
import {ButtonVariant} from '../Button/Button.types.tsx';
import {ToastProps} from "./Toast.types.tsx";
import React from "react";
import {twMerge} from "tailwind-merge";

const Toast: React.FC<ToastProps> = ({
                                         variant = ButtonVariant.Clean,
                                         className,
                                         ...props
                                     }) => {
    return (
        <Alert
            variant={variant}
            className={twMerge(
                'border shadow-lg rounded',
                className
            )}
            {...props}
        />
    );
};
export default Toast;
