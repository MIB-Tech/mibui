import {FC, useMemo} from "react";
import {ProgressProps} from "./Progress.types.ts";
import {twMerge} from "tailwind-merge";

const Progress: FC<ProgressProps> = ({state, size = "md", label = false, color = "primary", className}) => {
  const progressSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return 'h-3';
      case 'lg':
        return 'h-5';
      default:
        return 'h-4';
    }
  }, [size]);
  
  const textSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return `text-[9px]`;
      case 'lg':
        return `text-[14px]`;
      default:
        return `text-[11px]`;
    }
  }, [size]);
  
  const barColor = useMemo(() => {
    if (color === 'secondary') {
      return 'gray';
    } else {
      return color;
    }
  }, [color])
  
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className={twMerge(
          `bg-${barColor}-500 rounded-full text-secondary flex justify-center items-center`,
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
