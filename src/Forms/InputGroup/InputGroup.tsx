import {Children, cloneElement, FC, ReactElement, useMemo} from 'react';
import {twMerge} from 'tailwind-merge';
import {InputGroupProps} from './InputGroup.types.ts';

import {getChildren} from '../../Components/ButtonGroup/ButtonGroup.utils.tsx';


const InputGroup: FC<InputGroupProps> = ({className, ...props}) => {

  const children = useMemo(() => {
      const _children = getChildren(props.children) as ReactElement[];
      const count = Children.count(_children)

      return Children.map(_children, (child, index) => {
        const first = index === 0;
        const last = index === count - 1;

        return cloneElement(child, {
          ...child.props,
          className: twMerge(
            'rounded-none',
            first && `rounded-s`,
            last && `rounded-e`,
            child.props.className
          )
        })
      })
    }, [props.children],
  );

  return (
    <div className={twMerge('flex', className)}>
      {children}
    </div>
  )
}


export default InputGroup