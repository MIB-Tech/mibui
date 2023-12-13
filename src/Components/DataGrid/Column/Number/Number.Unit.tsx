import {FC} from 'react';

type NumberUnitProps = { value: number, measure?: string, precision?: number }
export const NumberUnit: FC<NumberUnitProps> = ({value, measure = 'MAD', precision = 2}) => (
  <span className='truncate'>
    {value.toFixed(precision)} <span className='text-gray-500 text-sm'>{measure}</span>
  </span>
);