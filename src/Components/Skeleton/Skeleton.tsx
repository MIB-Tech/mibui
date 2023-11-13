import {FC, useMemo} from "react";
import {SkeletonProps} from "./Skeleton.types.ts";
import {twMerge} from "tailwind-merge";

const Skeleton: FC<SkeletonProps> = ({variant, rounded, className, ...props}) => {
  const textSizeClassName = useMemo<string | undefined>(() => {
    switch (variant) {
      case 'text-xs':
        return 'h-2';
      case 'text-sm':
        return 'h-3';
      case 'text-lg':
        return 'h-5';
      case 'text-xl':
        return 'h-6';
      case 'text-2xl':
        return 'h-7';
      case 'text-3xl':
        return 'h-8';
      case 'text-4xl':
        return 'h-9';
      case 'text-5xl':
        return 'h-10';
      case 'text-6xl':
        return 'h-11';
      case 'text-7xl':
        return 'h-12';
      case 'text-8xl':
        return 'h-13';
      case 'text-9xl':
        return 'h-14';
      case 'text':
        return 'h-4';
    }
  }, [variant]);
  
  return (
    <div
      className={twMerge(
        `animate-pulse bg-gray-200 w-full rounded-${rounded}`,
        variant && textSizeClassName,
        className
      )}
      {...props}
    />
  );
};

export default Skeleton;
