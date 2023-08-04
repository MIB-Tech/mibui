import {HTMLAttributes} from "react";
import {SizeEnum} from "../Button/Button.types.tsx";


export type ModalProps = {
    open?: boolean;
    onClose?: () => void;
    size?: SizeEnum;
} & HTMLAttributes<HTMLDivElement>
