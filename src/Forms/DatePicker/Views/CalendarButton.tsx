import {FC} from 'react';
import {ButtonProps} from '../../../Components/Button/Button.types.tsx';
import {Button} from '../../../Components';
import {twMerge} from 'tailwind-merge';

type CalendarButtonProps = {
  selected?: boolean,
} & ButtonProps

export const CalendarButton: FC<CalendarButtonProps> = (
  {
    selected,
    className,
    variant = selected ? undefined : 'clean',
    color = selected ? undefined: 'secondary',
    ...props
  }) => (
  <Button
    size='sm'
    {...props}
    variant={variant}
    color={color}
    className={twMerge('tabular-nums', className)}
  />
);