import {FC, useMemo} from 'react';
import * as classNames from 'classnames';
import {ButtonType, ButtonVariant, ColorVariantEnum, SizeEnum, WeightEnum} from './Button.types.tsx';
import {getColorClassName} from './Button.utils.tsx';
import {Spinner} from '../Spinner';


export const Button: FC<ButtonType> = ({
                                         outline,
                                         loading,
                                         children,
                                         active,
                                         size,
                                         variant = ButtonVariant.Hard,
                                         bgColor: color = ColorVariantEnum.Primary,
                                         ...props
                                       }) => {
  const disabled = props.disabled || loading;
  const hardColorWeight = WeightEnum.W500;
  const softColorWeight = WeightEnum.W100;
  const hardColor = getColorClassName({color, weight: hardColorWeight});
  const softColor = color === ColorVariantEnum.Black ? 'gray-300' : getColorClassName({color, weight: softColorWeight})

  const bgColor = useMemo<string>(() => {
    switch (variant) {
      case ButtonVariant.Hard:
        return hardColor
      case ButtonVariant.Soft:
        return softColor
      case ButtonVariant.Clean:
        return 'white'
    }
  }, [hardColor, softColor, variant])

  const hoverBgColor = useMemo<string>(() => {
    switch (variant) {
      case ButtonVariant.Hard:
        return color === ColorVariantEnum.Black ? 'gray-700' : getColorClassName({color, weight: hardColorWeight + 100})
      case ButtonVariant.Soft:
        return color === ColorVariantEnum.Black ? 'gray-400' : getColorClassName({color, weight: softColorWeight + 100})
      case ButtonVariant.Clean:
        return 'gray-50'
    }
  }, [color, hardColorWeight, softColorWeight, variant])

  const textColor = useMemo<string>(() => {
    return variant === ButtonVariant.Hard ? 'white' : hardColor;
  }, [hardColor, variant])

  const outlineColor = useMemo<string>(() => {
    switch (variant) {
      case ButtonVariant.Hard:
        return color === ColorVariantEnum.Black ? 'gray-400' : softColor
      default:
        return hardColor
    }
  }, [color, hardColor, softColor, variant])


  const spacingClassName = useMemo<string>(() => {
    switch (size) {
      case SizeEnum.Small:
        return `px-2 py-1`
      case SizeEnum.Large:
        return `px-3 py-2`
      default:
        return `px-2.5 py-1.5`
    }
  }, [size])

  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={classNames(
        spacingClassName,
        loading && 'relative',
        `rounded font-semibold bg-${bgColor} text-${textColor}`,
        disabled ? `cursor-not-allowed opacity-60` : `hover:bg-${hoverBgColor}`,
        active && `bg-${hoverBgColor}`,
        size && `text-${size}`,
        outline && `ring-1 ring-inset ring-${outlineColor}`,
        props.className
      )}
    >
      {loading && (
        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
          <Spinner
            color={color}
            size={size}
          />
        </div>
      )}
      {/*{loading && (*/}
      {/*  <Spinner */}
      {/*    color={color} */}
      {/*    size={size} */}
      {/*    className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"*/}
      {/*  />*/}
      {/*)}*/}
      {children}
    </button>
  )
}