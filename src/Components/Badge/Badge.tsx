import {FC, useMemo} from 'react';
import {BadgeProps} from './Badge.types.ts';
import {XMarkIcon} from '@heroicons/react/20/solid';
import {twMerge} from 'tailwind-merge';
import {useVariant} from '../../hooks/UseVariant.ts';
import {Icon} from '../SvgIcon';


const Badge: FC<BadgeProps> = (
  {
    size,
    variant,
    color,
    onClose,
    children,
    ...props
  }
) => {
  const classNames = useVariant({color, variant});

  const spacingClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return `text-xs px-1.5 py-0.5`;
      case 'lg':
        return `px-3 py-1`;
      default:
        return `text-sm px-2.5 py-0.5`;
    }
  }, [size]);


  return (
    <span
      {...props}
      className={twMerge(
        `inline-flex items-center justify-center rounded`,
        classNames.background,
        classNames.text,
        spacingClassName,
        props.className
      )}
    >
      {children}
      {onClose && (
        <Icon
          icon={XMarkIcon}
          onClick={onClose}
          className={`cursor-pointer`}
        />
      )}
    </span>
  );
};

export default Badge;

