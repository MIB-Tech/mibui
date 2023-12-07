import {forwardRef} from 'react';
import {SvgIconProps} from './SvgIcon.types.ts';
import {twMerge} from 'tailwind-merge';

const Icon = forwardRef<SVGSVGElement, SvgIconProps>((
  {icon: IconElement, size = 4, color, className, ...props},
  ref
) => (
  <IconElement
    ref={ref}
    {...props}
    className={twMerge(`w-${size} h-${size}`, `text-${color}-500`, className)}
  />
))

export default Icon;