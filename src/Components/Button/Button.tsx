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
    <MuiButton
      ref={ref}
      type="button"
      {...props}
      disabled={disabled}
      className={twMerge(
        spacingClassName,
        loading && 'relative',
        `rounded font-medium`,
        variantStyles.background,
        variantStyles.text,
        !disabled && variantStyles.hover,
        active && variantStyles.active,
        sizing.text,
        outline && variantStyles.outline,
        props.className,
        // Mui state
        '[&.Mui-disabled]:cursor-not-allowed [&.Mui-disabled]:opacity-60',
        // `[&.Mui-active]:${variantStyles.outline}`,
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