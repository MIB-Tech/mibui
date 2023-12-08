import {forwardRef, useMemo} from 'react';
import {ButtonProps} from './Button.types.tsx';
import {Spinner} from '../Spinner';
import {twMerge} from 'tailwind-merge';
import {useVariantStyles} from '../../hooks/UseVariantStyles.ts';
import {useSizing} from '../../hooks/UseSizing.ts';
import {Button as MuiButton} from '@mui/base';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    outline,
    loading,
    children,
    active,
    size,
    variant = 'solid',
    color = 'primary',
    activeVariant = variant,
    activeColor = color,
    square,
    ...props
  },
  ref
) => {
  const variantStyles = useVariantStyles({color, variant});
  const activeStyles = useVariantStyles({color: activeColor, variant: activeVariant});
  const sizing = useSizing(size);
  const disabled = props.disabled || loading;

  const style = active ? activeStyles: variantStyles

  const spacingClassName = useMemo<string>(() => {
    if (square) {
      switch (size) {
        case 'sm':
          return `p-[4px]`;
        case 'lg':
          return `p-[6px]`;
        default:
          return `p-[5px]`;
      }
    } else {
      return sizing.padding;
    }
  }, [square, size, sizing.padding])


  return (
    <MuiButton
      ref={ref}
      type="button"
      {...props}
      disabled={disabled}
      className={twMerge(
        spacingClassName,
        loading && 'relative',
        `rounded font-medium`,
        style.background,
        style.text,
        !disabled && style.hover,
        active && style.active,
        sizing.text,
        outline && style.outline,
        props.className,
        // Mui state
        '[&.Mui-disabled]:cursor-not-allowed [&.Mui-disabled]:opacity-60',
        // `[&.Mui-active]:${style.outline}`,
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
    </MuiButton>
  )
})

export default Button