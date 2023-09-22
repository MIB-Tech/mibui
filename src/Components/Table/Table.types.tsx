import {HTMLAttributes} from "react";
import {SizingType} from "../../@types/Sizing.ts";

export type TableProps = {
	size?: SizingType;
	borderStyle?:BorderEnum;
	Hoverable?: boolean;
	borderLess?: boolean;
	stickyHeader?:boolean;
	stickyColumn?:boolean;
} & HTMLAttributes<HTMLTableElement>


export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>

export type CellProps = & HTMLAttributes<HTMLTableCellElement>
export enum BorderEnum {
	None = "none",
	Solid = "solid",
	Dashed = "dashed",
	Dotted = "dotted",
}


export type TableRowProps = & HTMLAttributes<HTMLTableRowElement>


