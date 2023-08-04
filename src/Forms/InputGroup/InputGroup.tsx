import {FC} from 'react';
import {twMerge} from 'tailwind-merge';
import {InnerPositionEnum, InputGroupProps} from './InputGroup.types.ts';
import InnerButton from './InputGroup.InnerButton.tsx';

const InputGroup: FC<InputGroupProps> = (
  {
    leading,
    trailing,
    className,
    children,
    ...props
  }
) => {

  return (
    <div
      className={twMerge('relative', className)}
      {...props}
    >
      {leading && (
        <InnerButton>
          {leading}
        </InnerButton>
      )}
      {trailing && (
        <InnerButton position={InnerPositionEnum.Right}>
          {trailing}
        </InnerButton>
      )}
      {children}
    </div>
  )
}


export default InputGroup