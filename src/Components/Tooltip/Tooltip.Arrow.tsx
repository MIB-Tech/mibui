import {TooltipProps} from './Tooltip.types.tsx';
import {useMemo} from 'react';
import {twMerge} from 'tailwind-merge';

export const TooltipArrow = ({placement}: Pick<TooltipProps, 'placement'>) => {
  const arrowPlacementClassName = useMemo<string>(() => {
    switch (placement) {
      case 'top':
        return '-bottom-1 left-1/2 -translate-x-1/2';
      case 'right':
        return '-left-1 top-1/2 -translate-y-1/2';
      case undefined:
      case 'bottom':
        return '-top-1 left-1/2 -translate-x-1/2';
      case 'left':
        return '-right-1 top-1/2 -translate-y-1/2';
      case 'top-start':
        return '-bottom-1 left-3';
      case 'right-start':
        return '-left-1 top-3';
      case 'bottom-start':
        return '-top-1 left-3';
      case 'left-start':
        return '-right-1 top-3';
      case 'top-end':
        return '-bottom-1 right-3';
      case 'right-end':
        return '-left-1 bottom-3';
      case 'bottom-end':
        return '-top-1 right-3';
      case 'left-end':
        return '-right-1 bottom-3';
    }
  }, [placement]);

  return (
    <div className={twMerge('absolute w-2 h-2 rotate-45 bg-white', arrowPlacementClassName)}/>
  )
}