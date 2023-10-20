import {FC, useMemo} from "react";
import {AvatarProps} from "./Avatar.types.ts";
import {twMerge} from "tailwind-merge";

const Avatar: FC<AvatarProps> = ({size, className, src, placeholder, style, ...props}) => {
  const avatarSize = useMemo<string>(() => {
    switch (size) {
      case "sm":
        return "w-6 h-6";
      default:
        return "w-9 h-9";
      case "lg":
        return "w-12 h-12";
    }
  }, [size]);

  const placeSize = useMemo<string>(() => {
    switch (size) {
      case "sm":
        return "w-6 h-6 text-xs ";
      default:
        return "w-9 h-9 text-base ";
      case "lg":
        return "w-12 h-12 text-3xl";
    }
  }, [size]);

  return (
    <div
      {...props}
      className={twMerge(
        "rounded bg-gray-100",
        avatarSize,
        placeholder && `flex items-center justify-center uppercase font-medium text-gray-500 ${placeSize}`,
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
