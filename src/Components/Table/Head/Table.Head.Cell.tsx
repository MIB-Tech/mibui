// Table.Head.Cell.tsx
import React from "react";
import {useTableContext} from "../Table.utils.tsx";
import {twMerge} from "tailwind-merge";
import {CellProps} from "../Table.types.tsx";

	const TableHeadCell: React.FC<CellProps> = ({className, ...props}) => {
	const {cellClassName,showBorder, borderClassName, stickyHeader} = useTableContext();
/*
	const borderClassNames = showBorder ? borderClassName : "";
*/
		const border = showBorder ? "border" : "";
		const borderClassNames =  borderClassName ;

		const stickyClassNames = props["data-first"] && stickyHeader ? " border-r sticky  z-3 left-0 bg-white " : "";
	return (<th
		{...props}
		className={twMerge( `${border}`,cellClassName,borderClassNames, stickyClassNames, className)}
	/>);
};
export default TableHeadCell;
