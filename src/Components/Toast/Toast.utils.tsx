import {ToastProps} from './Toast.types.tsx';
import toast, {ToastOptions} from 'react-hot-toast';
import Toast from './Toast.tsx';

export const notify = ({
    position = 'top-right',
    duration,
    ...props
  }: ToastProps & Pick<ToastOptions, 'position' | 'duration'>
) => toast.custom(<Toast {...props}/>, {position, duration})