import {IconElement} from '../../Forms/InputGroup/InputGroup.types.ts';
import {ButtonProps} from '../Button/Button.types.tsx';
import {FC, useMemo} from 'react';
import {SpacingType} from '../../@types/Spacing.ts';
import {Button, Icon} from '../index.ts';

export type IconButtonProps = {
  iconElement: IconElement,
} & ButtonProps
export const IconButton: FC<IconButtonProps> = ({size, iconElement: IconElement, ...props}) => {

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
    >
      <Icon
        icon={IconElement}
        size={iconSize}
      />
    </Button>
  );
};