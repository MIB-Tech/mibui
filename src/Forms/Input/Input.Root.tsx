import {forwardRef} from 'react';
import {InputRootProps} from './Input.types.ts';
import {prepareForSlot} from '@mui/base';
import {twMerge} from 'tailwind-merge';
import {useSizing} from '../../hooks/UseSizing.ts';
import {SizingType} from '../../@types/Sizing.ts';

export const useSpaceSizing = (size?: SizingType) => {
  switch (size) {
    case 'sm':
      return 1;
    case 'lg':
      return 3;
    default:
      return 2;
  }
};
const InputRoot = forwardRef<HTMLDivElement, InputRootProps>((
  {className, size, ...props},
  ref
) => {
  const sizing = useSizing(size);
  const spaceSize = useSpaceSizing(size);

  return (
    <div
      ref={ref}
      {...props}
      className={twMerge(
        `flex gap-x-${spaceSize}`,
        sizing.text,
        sizing.padding,
        className,
      )}
    />
  );
});
const InputRootSlot = prepareForSlot(InputRoot);

export default InputRoot;
export {InputRootSlot};