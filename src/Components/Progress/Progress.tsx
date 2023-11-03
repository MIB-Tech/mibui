import {FC, useMemo} from 'react';
import {ProgressProps} from './Progress.types.ts';
import {twMerge} from 'tailwind-merge';

const Progress: FC<ProgressProps> = ({state, size, showLabel , color = 'primary', className, ...props}) => {
  const sizeClassName = useMemo(() => {
    switch (size) {
      case 'sm':
        return 'h-4 text-xs';
      case 'lg':
        return 'h-6 text-md';
      default:
        return 'h-5 text-sm';
    }
  }, [size]);

  return (
    <div
      {...props}
      className={twMerge('w-full bg-gray-200 rounded-full', className)}
    >
      <div
        className={twMerge(
          'rounded-full text-secondary flex justify-center items-center',
          `bg-${color === 'secondary' ? 'gray' : color}-500`,
          sizeClassName
        )}
        style={{width: `${state}%`}}
      >
        {showLabel && `${state}%`}
      </div>
    </div>
  );
};

export default Progress;
