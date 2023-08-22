import {forwardRef, useMemo} from 'react';
import {ButtonProps} from './Button.types.tsx';
import {Spinner} from '../Spinner';
import {twMerge} from 'tailwind-merge';
import {useVariantStyles} from '../../hooks/UseVariantStyles.ts';
import {useSizing} from '../../hooks/UseSizing.ts';

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
  const variantStyles = useVariantStyles({color, variant});
  const sizing = useSizing(size);
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
      return sizing.padding
    }
  }, [icon, size, sizing.padding])

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
        variantStyles.background,
        variantStyles.text,
        disabled ? `cursor-not-allowed opacity-60` : variantStyles.hover,
        active && variantStyles.active,
        sizing.text,
        outline && variantStyles.outline,
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