import { getSizeClass, useTableContext} from "../Table.utils.tsx";
import {CellProps} from "../Table.types.tsx";
import React from "react";
import {twMerge} from "tailwind-merge";

const TableRowCell: React.FC<CellProps> = ({className, ...props}) => {
	const {
		size,
		borderClassName,showBorder,
		stickyHeader} = useTableContext();
	const sizeClass = getSizeClass(size);
	const border = showBorder ? "border" : "";

	const borderClassNames =  borderClassName ;
	const stickyClassNames = props["data-first"] && stickyHeader ? "border-t border-r sticky left-0 bg-white " : "";
	return (
		<td
		className={
		twMerge(`
	
		 ${sizeClass}
		 ${borderClassNames}`,
			stickyClassNames,border,
			className)}
		{...props}
	/>);
};
export default TableRowCell;
