import {FC} from 'react';
import {twMerge} from 'tailwind-merge';
import {InnerButtonProps, InnerPositionEnum} from './InputGroup.types.ts';

const InnerButton: FC<InnerButtonProps> = ({position = InnerPositionEnum.Left, className, ...props}) => {

  return (
    <div
      className={twMerge(
        'absolute inset-y-0 flex items-center',
        position === 'left' ? 'left-0' : 'right-0',
        className
      )}
      {...props}
    />
  )
}

export default InnerButton