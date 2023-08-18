import {FC} from 'react';
import {SvgIconProps} from './SvgIcon.types.ts';
import {twMerge} from 'tailwind-merge';

const SvgIcon:FC<SvgIconProps> = ({icon: Icon, size = 4, color, ...props}) => {

  return (
    <Icon
      className={twMerge(`w-${size} h-${size}`, `text-${color}-500` )}
      {...props}
    />
  )
}

export default SvgIcon