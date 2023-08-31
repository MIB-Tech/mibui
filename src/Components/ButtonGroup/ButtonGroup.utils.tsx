import {Children, cloneElement, Fragment, isValidElement, ReactNode} from 'react';

export const getChildren = (children: ReactNode): ReactNode => {

  return Children.map(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === Fragment) {
        return getChildren(child.props.children);
      }

      return cloneElement(child);
    }

    return child;
  })
};