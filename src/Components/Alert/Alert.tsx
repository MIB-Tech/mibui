import {FC, useState} from 'react';
import {AlertProps} from './Alert.types';
import Button from '../Button/Button.tsx';
import {twMerge} from 'tailwind-merge';
import {useVariantStyles} from '../../hooks/UseVariantStyles.ts';
import {Icon} from '../SvgIcon';
import {XMarkIcon} from '@heroicons/react/20/solid';

const Alert: FC<AlertProps> = (
  {
    color,
    variant,
    icon,
    title,
    dismissible,
    children,
    ...props
  }
) => {
  const classNames = useVariantStyles({color, variant});
  const [dismissed, setDismissed] = useState<boolean>();

  if (dismissed) {
    return <></>;
  }

  return (
    <div
      {...props}
      className={twMerge(
        `p-4 rounded flex items-start`,
        classNames.background,
        classNames.text,
        variant === 'clean' && classNames.outline,
        props.className
      )}
      role='alert'
    >
      {icon && <div className='mr-4'>{icon}</div>}
      <div>
        {title && (<div className='font-bold'>{title}</div>)}
        {children}
      </div>
      {dismissible && (
        <Button
          variant={variant}
          color={color}
          onClick={() => setDismissed(true)}
          className='ml-auto'
        >
          <Icon icon={XMarkIcon}/>
        </Button>
      )}
    </div>
  );
};

export default Alert;