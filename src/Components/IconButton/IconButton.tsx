import {IconElement} from '../../Forms/InputGroup/InputGroup.types.ts';
import {ButtonProps} from '../Button/Button.types.tsx';
import {forwardRef, useMemo} from 'react';
import {SpacingType} from '../../@types/Spacing.ts';
import {Button, Icon} from '../index.ts';
import {prepareForSlot} from '@mui/base';

export type IconButtonProps = {
  iconElement: IconElement,
} & Omit<ButtonProps, 'square'>


export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((
  {size, iconElement: IconElement, color = 'primary', children, ...props},
  ref
) => {

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
      ref={ref}
      variant='light'
      color={color}
      square
      size={size}
      {...props}
    >
      <Icon
        icon={IconElement}
        size={iconSize}
      />
      {children}
    </Button>
  );
})

export const IconButtonSlot = prepareForSlot(IconButton);
