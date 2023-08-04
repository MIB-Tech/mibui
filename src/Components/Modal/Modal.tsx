import React, {useMemo} from 'react';
import {Dialog} from '@headlessui/react';
import {ModalProps} from './Modal.types';
import {SizeEnum} from "../Button/Button.types.tsx";
import {twMerge} from "tailwind-merge";

const Modal: React.FC<ModalProps> = ({open = false, onClose, size, children}) => {
    const sizeClassName = useMemo<string>(() => {
        switch (size) {
            case SizeEnum.Small:
                return 'max-w-sm';
            case SizeEnum.Large:
                return 'max-w-5xl';
            default:
                return 'max-w-md';
        }
    }, [size])

    if (!open) {
        return <></>;
    }

    return (
        <Dialog
            open={open}
            onClose={()=> onClose?.()}
            className="fixed inset-0 z-10 overflow-y-auto"
        >
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black bg-opacity-25"/>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-5 text-center">
                        <Dialog.Panel
                            className={twMerge(
                                `rounded pt-5 transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl`,
                                sizeClassName
                            )}
                        >
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                Payment successful
                            </Dialog.Title>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">{children}</p>
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Modal;