import {FC} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid';
import {IconButton, IconButtonProps} from '../../../Components/IconButton/IconButton.tsx';

export const CalendarOffsetButton: FC<IconButtonProps> = ({...props}) => (
  <IconButton
    size='sm'
    variant='light'
    color='secondary'
    {...props}
  />
);
type OffsetButtonProps = Omit<IconButtonProps, 'iconElement'>
export const BackOffsetButton: FC<OffsetButtonProps> = props => (
  <CalendarOffsetButton
    {...props}
    iconElement={ChevronLeftIcon}
  />
);
export const ForwardOffsetButton: FC<OffsetButtonProps> = props => (
  <CalendarOffsetButton
    {...props}
    iconElement={ChevronRightIcon}
  />
);