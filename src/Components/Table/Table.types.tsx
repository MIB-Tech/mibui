import {HTMLAttributes} from "react";
import {SizingType} from "../../@types/Sizing.ts";

export type TableProps = {
	className?: string;
	size?: SizingType;
	borderLess?:BorderEnum;
	showHover?: boolean;
	showBorder?: boolean;
	stickyHeader?:boolean;



} & HTMLAttributes<HTMLTableElement>


export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>

export type CellProps ={"data-first"?: boolean;}&HTMLAttributes<HTMLTableCellElement>
export enum BorderEnum {
	None = "none",
	Solid = "solid",
	Dashed = "dashed",
	Dotted = "dotted",
}

/*
export type TableBodyProps = NonNullable<unknown> & HTMLAttributes<HTMLTableSectionElement>
*/

export type TableRowProps = {
	//hoverClassName?:"hover:bg-gray-200" ;
	//showHover?: boolean;

} & HTMLAttributes<HTMLTableRowElement>


