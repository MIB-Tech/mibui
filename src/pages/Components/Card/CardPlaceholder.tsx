import {Card} from '../../../Components';
import {twMerge} from 'tailwind-merge';
import {CardProps} from '../../../Components/Card/Card.types.tsx';

export const CardPlaceholder = ({className}: CardProps) => (
  <Card
    className={twMerge(
      `bg-gray-50 border-dashed border-2`,
      className
    )}
  />
)