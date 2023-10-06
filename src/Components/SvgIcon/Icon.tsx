import {FC} from 'react';
import {SvgIconProps} from './SvgIcon.types.ts';
import {twMerge} from 'tailwind-merge';

const Icon: FC<SvgIconProps> = (
  {
    icon: IconElement,
    size = 4,
    color,
    className,
    ...props
  }
) => (
  <IconElement
    {...props}
    className={twMerge(`w-${size} h-${size}`, `text-${color}-500`, className)}
  />
);

export default Icon;