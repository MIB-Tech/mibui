import {useContext, useMemo} from 'react';
import {TableContext} from './Context/Table.Context.tsx';

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTableSizeContext must be used within a TableSizeProvider');
  }

  const {size, borderStyle} = context;

  const cellClassName = useMemo(() => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1';
      case 'lg':
        return 'px-6 py-3';
      default:
        return 'px-4 py-2';
    }
  }, [size]);

  const borderClassName = useMemo(() => {
    switch (borderStyle) {
      case 'none':
        return 'border-none';
      case 'solid':
        return 'border border-solid';
      case 'dashed':
        return 'border border-dashed';
      case 'dotted':
        return 'border border-dotted';
      default:
        return 'border-b';
    }
  }, [borderStyle]);

  return {
    ...context,
    cellClassName,
    borderClassName
  };
};
