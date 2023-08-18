import {Children, cloneElement, FC, ReactElement, useMemo} from 'react';
import {ButtonGroupProps} from './ButtonGroup.types.tsx';
import {twMerge} from 'tailwind-merge';
import {SizeEnum} from '../Button/Button.types.tsx';
import {getOutlineColor} from '../Button/Button.utils.tsx';
import {getChildren} from './ButtonGroup.utils.tsx';

const ButtonGroup: FC<ButtonGroupProps> = ({vertical, outline, children, ...props}) => {
  const outlineColor = getOutlineColor({color: props.color, variant: props.variant})

  const spacingClassName = useMemo<string>(() => {
    switch (props.size) {
      case SizeEnum.Small:
        return `px-[7.5px] py-[3.5px]`
      case SizeEnum.Large:
        return `px-[11.5px] py-[7.5px]`
      default:
        return `px-[9.5px] py-[5.5px]`
    }
  }, [props.size])
  
  const items = useMemo(() => {
      const _children = getChildren(children) as ReactElement<ButtonGroupProps>[];

      return Children.map(_children, (child, index) => {
        const first = index === 0;
        const last = index === Children.count(_children) - 1;

        return cloneElement(child, {
          ...props,
          className: twMerge(
            'rounded-none',
            first && `rounded-${vertical ? 't' : 's'}`,
            last && `rounded-${vertical ? 'b' : 'e'}`,
            outline && twMerge(
              'p-10',
              !last && `border-${vertical ? 'b' : 'e'} border-${outlineColor}`,
              spacingClassName
            ),
          )
        })
      })
    }, [children, outline, outlineColor, props, spacingClassName, vertical],
  );

  return (
    <div
      className={twMerge(
        'flex rounded',
        vertical && 'flex-col',
        outline && `border border-${getOutlineColor({color: props.color, variant: props.variant})}`
      )}
      role="group"
    >
      {items}
    </div>
  )
}

export default ButtonGroup