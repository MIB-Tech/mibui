import {getSizeClass, useTableContext} from "../Table.utils.tsx";
import {CellProps} from "../Table.types.tsx";
import React from "react";
import {twMerge} from "tailwind-merge";

const TableRowCell: React.FC<CellProps> = ({className, ...props}) => {
	const {
		size,
		borderClassName,
		borderLess,
		Hoverable,
		stickyColumn,
	} = useTableContext();
	const sizeClass = getSizeClass(size);
	const border = borderLess ? "border-r first:border-l" : "";
	const hoverClassName = Hoverable ? "group-hover:bg-gray-50 bg-white cursor-pointer" : "";
	const borderClassNames = borderClassName;
	const stickyClassNames = stickyColumn  ? "first:sticky left-0 first:border-r-2" : "";

//const column = 	stickyColumn ? "":"";

	return (
		<td
			className={twMerge(`${sizeClass}
			${borderClassNames}
			${stickyClassNames}`,
				hoverClassName,
				border,
				className,"group-last:border-b-0  ")}
			{...props}
		/>);
};
export default TableRowCell;
