import {ForwardRefExoticComponent, HTMLAttributes, PropsWithoutRef, RefAttributes, SVGProps} from 'react';
import {ColorType} from '../../@types/Color.ts';
import {SpacingType} from '../../@types/Spacing.ts';

export type SvgIconProps = {
  size?: SpacingType
  color?: ColorType
  icon: ForwardRefExoticComponent<PropsWithoutRef<SVGProps<SVGSVGElement>> & {
    title?: string,
    titleId?: string
  } & RefAttributes<SVGSVGElement>>
} & HTMLAttributes<SVGSVGElement>