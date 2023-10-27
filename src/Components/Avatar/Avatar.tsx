import {FC, useMemo} from 'react';
import {AvatarProps} from './Avatar.types.ts';
import {twMerge} from 'tailwind-merge';
import {SpacingType} from '../../@types/Spacing.ts';

const Avatar: FC<AvatarProps> = ({size, className, src, placeholder, style, ...props}) => {

  const avatarSize = useMemo<Exclude<SpacingType, string>>(() => {
    switch (size) {
      case 'xs':
        return 7;
      case 'sm':
        return 8;
      default:
        return 9;
      case 'lg':
        return 12;
      case 'xl':
        return 14;
      case '2xl':
        return 16;
      case '3xl':
        return 20;
      case '4xl':
        return 24;
      case '5xl':
        return 28;
      case '6xl':
        return 32;
      case '7xl':
        return 40;
      case '8xl':
        return 52;
      case '9xl':
        return 72;
    }
  }, [size]);

  return (
    <div
      {...props}
      className={twMerge(
        'rounded bg-gray-100',
        `w-${avatarSize} h-${avatarSize}`,
        placeholder && `flex items-center justify-center uppercase text-${size}`,
        src && 'bg-cover',
        className
      )}
      style={{
        ...style,
        backgroundImage: src ? `url(${src})` : undefined
      }}
    >
      {placeholder}
    </div>
  );
};

export default Avatar;
