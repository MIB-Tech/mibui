import {FC, useMemo} from "react";
import {ProgressProps} from "./Progress.types.ts";
import {twMerge} from "tailwind-merge";

const Progress: FC<ProgressProps> = ({state, size = "md", label = false, color = "primary", className}) => {
  const progressSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return 'h-4';
      case 'lg':
        return 'h-6';
      default:
        return 'h-5';
    }
  }, [size]);
  
  const textSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return `text-xs`;
      case 'lg':
        return `text-md`;
      default:
        return `text-sm`;
    }
  }, [size]);
  
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className={twMerge(
          `bg-${color === 'secondary' ? 'gray' : color}-500 rounded-full text-secondary flex justify-center items-center`,
          textSize,
          progressSize,
          className
        )}
        style={{width: `${state}%`}}
      >
        {label && `${state}%`}
      </div>
    </div>
  );
};

export default Progress;
