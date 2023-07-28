import {CardProps} from 'flowbite-react';
import {Card} from '../../../Components';
import {twMerge} from 'tailwind-merge';

export const CardPlaceholder = ({className}: CardProps) => (
  <Card
    className={twMerge(
      `bg-gray-50 border-dashed border-2`,
      className
    )}
  />
)