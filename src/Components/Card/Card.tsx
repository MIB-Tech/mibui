import {FC, useMemo} from 'react';
import * as classNames from 'classnames';
import {ArgumentArray} from 'classnames';
import {PropsType} from './Card.types.tsx';

export const Card: FC<PropsType> = ({header, footer, children, ...props}) => {

  const className = useMemo<string>(() => {
    const _className: ArgumentArray = [
      'border border-gray-200 rounded',
    ]

    return classNames(_className)
  }, [])

  const bodyClassName = useMemo<string>(() => {
    const _className: ArgumentArray = [
      'w-full p-5'
    ]

    return classNames(_className)
  }, [])

  const headerClassName = useMemo<string>(() => {
    const _className: ArgumentArray = [
      'p-5 border-b',
    ]
    return classNames(_className)
  }, [])

  const footerClassName = useMemo<string>(() => {
    const _className: ArgumentArray = [
      'p-5 border-t',
    ]
    return classNames(_className)
  }, [])

  return (
    <div
      {...props}
      className={classNames(props.className, className)}
    >
      {header && (
        <div className={headerClassName}>
          {header}
        </div>
      )}
      <div className={bodyClassName}>
        {children}
      </div>
      {footer && (
        <div className={footerClassName}>
          {footer}
        </div>
      )}
    </div>
  )
}