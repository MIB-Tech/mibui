import {HTMLAttributes} from 'react';
import {Context} from './Context/Table.Context.tsx';

export const BORDER_STYLES = [
	'none',
	'solid',
	'dashed',
	'dotted'
] as const;

export type BorderStyle = typeof BORDER_STYLES[number]

export type TableProps = Context & HTMLAttributes<HTMLTableElement>


export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>

export type CellProps = & HTMLAttributes<HTMLTableCellElement>

export type TableRowProps = & HTMLAttributes<HTMLTableRowElement>


