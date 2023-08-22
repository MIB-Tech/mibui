import {ToastProps} from './Toast.types.tsx';
import React from 'react';
import {twMerge} from 'tailwind-merge';
import {Alert} from '../Alert';

const Toast: React.FC<ToastProps> = ({variant = 'clean', className, ...props}) => {
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
