import * as React from 'react';

export type SvgIconProps = {
  size?: 4
  color?: 'gray'
  icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>
}