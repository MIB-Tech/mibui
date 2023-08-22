import {FC, useMemo} from 'react';
import {ButtonProps} from '../../Components/Button/Button.types.tsx';
import {Button, Icon} from '../../Components';
import {twMerge} from 'tailwind-merge';
import {IconElement} from './InputGroup.types.ts';

import {SpacingType} from '../../@types/Spacing.ts';

export const InputGroupIconButton: FC<{
  iconElement: IconElement,
} & ButtonProps> = ({size, iconElement: IconElement, ...props}) => {

  const iconSize = useMemo<SpacingType>(() => {
    switch (size) {
      case 'sm':
        return 5;
      case 'lg':
        return 7;
      default:
        return 6;
    }
  }, [size]);

  return (
    <Button
      variant='soft'
      icon
      size={size}
      {...props}
      className={twMerge(
        'scale-[60%]',
        props.className
      )}
    >
      <Icon icon={IconElement} size={iconSize}/>
    </Button>
  )
}