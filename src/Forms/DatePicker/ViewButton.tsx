import {FC} from 'react';
import {ButtonProps} from '../../Components/Button/Button.types.tsx';
import {Button} from '../../Components';
import {twMerge} from 'tailwind-merge';
import {ArrowIcon} from './ArrowIcon.tsx';

export const ViewButton: FC<ButtonProps> = ({children, className, ...props}) => {

  return (
    <Button
      color='secondary'
      size='sm'
      {...props}
      className={twMerge('flex items-center space-x-1 font-semibold capitalize tabular-nums', className)}
    >
      {children}
      <ArrowIcon/>
    </Button>
  );
};