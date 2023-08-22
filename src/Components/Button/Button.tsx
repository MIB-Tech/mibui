import {forwardRef, useMemo} from 'react';
import {ButtonProps} from './Button.types.tsx';
import {Spinner} from '../Spinner';
import {twMerge} from 'tailwind-merge';
import {useVariant} from '../../hooks/UseVariant.ts';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    outline,
    loading,
    children,
    active,
    size,
    variant = 'solid',
    icon,
    color = 'primary',
    ...props
  },
  ref
) => {
  const classNames = useVariant({color, variant});
  const disabled = props.disabled || loading;

  const spacingClassName = useMemo<string>(() => {
    if (icon) {
      switch (size) {
        case 'sm':
          return `p-[4px]`;
        case 'lg':
          return `p-[8px]`;
        default:
          return `p-[6px]`;
      }
    } else {
      switch (size) {
        case 'sm':
          return `px-[8px] py-[4px]`;
        case 'lg':
          return `px-[12px] py-[8px]`;
        default:
          return `px-[10px] py-[6px]`;
      }
    }
  }, [size, icon])

  return (
    <button
      ref={ref}
      type="button"
      {...props}
      disabled={disabled}
      className={twMerge(
        spacingClassName,
        loading && 'relative',
        `rounded font-semibold`,
        classNames.background,
        classNames.text,
        disabled ? `cursor-not-allowed opacity-60` : classNames.hover,
        active && classNames.active,
        size && `text-${size}`,
        outline && classNames.outline,
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