import {FC} from 'react';
import {ButtonProps} from '../../../Components/Button/Button.types.tsx';
import {Button} from '../../../Components';
import {twMerge} from 'tailwind-merge';

type CalendarButtonProps = ButtonProps

export const CalendarButton: FC<CalendarButtonProps> = (
  {
    className,
    variant,
    color = 'secondary' ,
    activeColor= 'primary',
    ...props
  }) => (
  <Button
    size='sm'
    {...props}
    variant={variant}
    color={color}
    className={twMerge('tabular-nums', className)}
    activeColor={activeColor}
  />
);