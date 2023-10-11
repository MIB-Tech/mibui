import {FC, useMemo} from "react";
import {CheckboxProps} from "./Checkbox.types.tsx";
import {twMerge} from "tailwind-merge";

const Checkbox: FC<CheckboxProps> = ({color = 'primary', size, className, ...props}) => {
  const checkboxSize = useMemo<string | undefined>(() => {
    switch (size) {
      case undefined:
      case 'md':
        return 'w-5 h-5';
      case 'lg':
        return 'w-6 h-6';
    }
  }, [size]);

  return (
    <input
      {...props}
      type="checkbox"
      className={twMerge(
        checkboxSize,
        color === 'secondary' ?'accent-secondary':`accent-${color}-500`,
        className
      )}
    />
  );
};

export default Checkbox