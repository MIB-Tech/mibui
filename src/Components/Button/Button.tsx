import {FC, forwardRef, useMemo} from 'react';
import {ButtonProps, ButtonVariant, ColorVariantEnum, SizeEnum} from './Button.types.tsx';
import {
  getColorClassName,
  getOutlineClassName,
  getSoftColor,
  getSolidColor,
  SOFT_WEIGHT,
  SOLID_WEIGHT
} from './Button.utils.tsx';
import {Spinner} from '../Spinner';
import {twMerge} from 'tailwind-merge';

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    outline,
    loading,
    children,
    active,
    size,
    variant = ButtonVariant.Solid,
    color = ColorVariantEnum.Primary,
    ...props
  },
  ref
) => {
  const disabled = props.disabled || loading;
  const solidColor = getSolidColor(color)
  const softColor = getSoftColor(color)

  const bgColor = useMemo<string>(() => {
    switch (variant) {
      case ButtonVariant.Solid:
        return solidColor
      case ButtonVariant.Soft:
        return softColor
      case ButtonVariant.Clean:
        return 'white'
    }
  }, [solidColor, softColor, variant])

  const hoverBgColor = useMemo<string>(() => {
    switch (variant) {
      case ButtonVariant.Solid:
        return color === ColorVariantEnum.Black ? 'gray-700' : getColorClassName({color, weight: SOLID_WEIGHT + 100})
      case ButtonVariant.Soft:
        return color === ColorVariantEnum.Black ? 'gray-400' : getColorClassName({color, weight: SOFT_WEIGHT + 100})
      case ButtonVariant.Clean:
        return softColor
    }
  }, [color, softColor, variant])

  const textColor = useMemo<string>(() => {
    return variant === ButtonVariant.Solid ? 'white' : solidColor;
  }, [solidColor, variant])

  const spacingClassName = useMemo<string>(() => {
    switch (size) {
      case SizeEnum.Small:
        return `px-[8px] py-[4px]`

      case SizeEnum.Large:
        return `px-[12px] py-[8px]`
      default:
        return `px-[10px] py-[6px]`
    }
  }, [size])

  return (
    <button
      ref={ref}
      type="button"
      {...props}
      disabled={disabled}
      className={twMerge(
        spacingClassName,
        loading && 'relative',
        `rounded font-semibold bg-${bgColor} text-${textColor}`,
        disabled ? `cursor-not-allowed opacity-60` : `hover:bg-${hoverBgColor}`,
        active && `bg-${hoverBgColor}`,
        size && `text-${size}`,
        outline && getOutlineClassName({color, variant}),
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
      {children}
    </button>
  )
})

export default Button