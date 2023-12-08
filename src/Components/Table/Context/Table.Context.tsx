import {createContext, FC} from 'react';
import {BorderStyle, TableProps} from '../Table.types.tsx';
import {SizingType} from '../../../@types/Sizing.ts';

export type Context = {
  size?: SizingType,
  borderStyle?: BorderStyle,
  hoverable?: boolean,
  bordered?: boolean,
  stickyHeader?: boolean,
  stickyColumn?: boolean,
}

export const TableContext = createContext<Context>({
  borderStyle: 'solid'
});

export const TableSizeProvider: FC<Context & Pick<TableProps, 'children'>> = ({children, ...props}) => (
  <TableContext.Provider value={props}>
    {children}
  </TableContext.Provider>
);
