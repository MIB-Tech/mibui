// Table.Head.Cell.tsx
import React from "react";
import {useTableContext} from "../Table.utils.tsx";
import {twMerge} from "tailwind-merge";
import {CellProps} from "../Table.types.tsx";

const TableHeadCell: React.FC<CellProps> = ({className, ...props}) => {
	const {cellClassName, borderLess, borderClassName,stickyColumn} = useTableContext();


	return (
		<th
		{...props}
		className={twMerge(
			stickyColumn &&  "first:sticky left-0 z-10 bg-white first:border-r-2" ,
			borderLess && "border-r border-t first:border-l",
			cellClassName,
			borderClassName,
			className
		)}
	/>);
};
export default TableHeadCell;
