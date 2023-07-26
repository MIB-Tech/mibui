import {CardProps} from 'flowbite-react';
import {Card} from '../../../Components/Card/Card.tsx';
import * as classNames from 'classnames';

export const CardPlaceholder = ({className}: CardProps) => (
  <Card
    className={classNames(
      `w-full bg-gray-50 border-dashed border-2`,
      className
    )}
  />
)