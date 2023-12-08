import {FC, useMemo} from 'react';
import {BadgeProps} from './Badge.types.ts';
import {XMarkIcon} from '@heroicons/react/20/solid';
import {twMerge} from 'tailwind-merge';
import {useVariantStyles} from '../../hooks/UseVariantStyles.ts';
import {Icon} from '../SvgIcon';


const Badge: FC<BadgeProps> = (
  {
    size,
    variant,
    color,
    closable,
    onClose,
    outline,
    children,
    ...props
  }
) => {
  const variantStyles = useVariantStyles({color, variant});

  const spacingClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `text-xs px-1`;
      case 'lg':
        return `text-base gap-1 px-2.5`;
      default:
        return `text-sm gap-0.5 px-2`;
    }
  }, [size]);


  return (
    <span
      {...props}
      className={twMerge(
        `flex items-center justify-center rounded-sm`,
        variantStyles.background,
        variantStyles.text,
        spacingClassName,
        outline && variantStyles.outline,
        props.className
      )}
    >
      <div className='truncate'>
        {children}
      </div>
      {closable && (
        <Icon
          icon={XMarkIcon}
          onClick={onClose}
          className='cursor-pointer'
        />
      )}
    </span>
  );
};

export default Badge;

