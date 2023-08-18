import {FC, useMemo} from 'react';
import {ButtonProps, ButtonVariant, SizeEnum} from '../../Components/Button/Button.types.tsx';
import {Button} from '../../Components';
import {twMerge} from 'tailwind-merge';
import {IconElement} from './InputGroup.types.ts';

export const InputGroupIconButton: FC<{
  iconElement: IconElement,
} & ButtonProps> = ({className, size, iconElement: Icon, ...props}) => {

  const buttonClassName = useMemo<string>(() => {
    switch (size) {
      case SizeEnum.Small:
        return `mx-1 p-[1px]`
      case SizeEnum.Large:
        return `mx-3 p-[3px]`
      default:
        return `mx-2 p-[2px]`
    }
  }, [size])

  const iconClassName = useMemo<string>(() => {
    switch (size) {
      case SizeEnum.Small:
        return `w-4 h-4`
      case SizeEnum.Large:
        return `w-6 h-6`
      default:
        return `w-5 h-5`
    }
  }, [size])

  return (
    <Button
      variant={ButtonVariant.Soft}
      icon
      className={twMerge(
        buttonClassName,
        className
      )}
      {...props}
    >
      <Icon className={iconClassName}/>
    </Button>
  )
}