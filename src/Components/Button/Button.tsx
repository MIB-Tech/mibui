import {FC, useMemo} from 'react';
import * as classNames from 'classnames';
import {ArgumentArray} from 'classnames';
import {ButtonSizeEnum, ButtonType, ButtonVariant, ColorVariantEnum} from './Button.types.tsx';
import {buttonUtils} from './Button.utils.tsx';

export const Button: FC<ButtonType> = ({
                                         round,
                                         active,
                                         size,
                                         variant = ButtonVariant.Default,
                                         color = {color: ColorVariantEnum.Primary},
                                         ...props
                                       }) => {

  const className = useMemo<string>(() => {
    const _className: ArgumentArray = [
      'ring-offset-1 focus:ring-2 focus:z-10 hover:shadow',
      `focus:ring-${buttonUtils({...color, weight: 300})} focus:outline-none`
    ]

    _className.push(`rounded-s-${round?.start || 'xl'}`)
    _className.push(`rounded-e-${round?.end || 'xl'}`)

    if (active) {
      _className.push(`ring-2 ring-${buttonUtils({...color, weight: 300})} z-10`)
    }
    if (props.disabled) {
      _className.push(`cursor-not-allowed opacity-60`)
    }
    if (size) {
      _className.push(`text-${size}`)
    }

    switch (variant) {
      case ButtonVariant.Default:
        _className.push(
          `text-white`,
          `bg-${buttonUtils(color)}`
        )
        switch (size) {
          case ButtonSizeEnum.Small:
            _className.push('px-[8px] py-[3px]');
            break;
          case ButtonSizeEnum.Large:
            _className.push('px-[14px] py-[9px]');
            break;
          default:
            _className.push('px-[10px] py-[5px]');
            break;
        }
        break;
      case ButtonVariant.Outline:
        _className.push(
          `text-${buttonUtils(color)}`,
          'bg-white',
          `border-2 border-${color.color === ColorVariantEnum.Black ? 'gray-500' : buttonUtils({...color})}`
        )
        switch (size) {
          case ButtonSizeEnum.Small:
            _className.push('px-[6px] py-[1px]');
            break;
          case ButtonSizeEnum.Large:
            _className.push('px-[12px] py-[7px]');
            break;
          default:
            _className.push('px-[8px] py-[3px]');
            break;
        }
        break;
    }

    return classNames(_className)
  }, [color, round, active, props.disabled, size, variant])

  return (
    <button
      type="button"
      {...props}
      className={classNames(className, props.className)}
    />
  )
}