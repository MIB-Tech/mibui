import React, {useMemo} from 'react';
import {ModalProps} from './Modal.types';
import {twMerge} from 'tailwind-merge';
import {Modal as MuiModal} from '@mui/base';

const Modal: React.FC<ModalProps> = ({title, open = false, onClose, size, children, className, ...props}) => {
  const sizeClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return 'max-w-sm';
      case 'lg':
        return 'max-w-5xl';
      default:
        return 'max-w-md';
    }
  }, [size]);

  if (!open) {
    return <></>;
  }

  return (
    <MuiModal
      open={open}
      onClose={() => onClose?.()}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <div className='flex items-center justify-center min-h-screen'>
        <div className='fixed inset-0 bg-black bg-opacity-25'/>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-5 text-center'>
            <div
              {...props}
              className={twMerge(
                `rounded pt-5 transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl`,
                sizeClassName,
                className,
              )}
            >
              {title && (
                <h3 className={twMerge(
                  'text-lg leading-6 text-gray-900',
                  children && 'mb-4'
                )}>
                  {title}
                </h3>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </MuiModal>
    );
};

export default Modal;
