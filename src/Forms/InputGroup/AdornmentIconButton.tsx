import {FC, useMemo} from 'react';
import {IconButtonProps} from '../../Components/IconButton/IconButton.tsx';
import {Button, Icon} from '../../Components';
import {SpacingType} from '../../@types/Spacing.ts';
import {twMerge} from 'tailwind-merge';

export const AdornmentIconButton: FC<IconButtonProps> = ({size, iconElement, ...props}) => {

  const iconSize = useMemo<SpacingType>(() => {
    switch (size) {
      case 'sm':
        return 3;
      case 'lg':
        return 5;
      default:
        return 4;
    }
  }, [size]);

  const spacingClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `w-4 h-4`;
      case 'lg':
        return `w-6 h-6`;
      default:
        return `w-5 h-5`;
    }
  }, [size]);

  return (
    <div className='flex items-center justify-center'>
      <Button
        variant='light'
        square
        size={size}
        {...props}
        className={twMerge(
          'p-0 flex items-center justify-center rounded-sm',
          spacingClassName,
          props.className
        )}
        onMouseDown={e => e.preventDefault()}
      >
        <Icon
          icon={iconElement}
          size={iconSize}
        />
      </Button>
    </div>
  );
};