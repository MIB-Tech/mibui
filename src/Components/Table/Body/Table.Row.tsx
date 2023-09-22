import React from "react";
import {useTableContext} from "../Table.utils.tsx";
import {TableRowProps} from "../Table.types.tsx";
import {twMerge} from "tailwind-merge";


const TableRow: React.FC<TableRowProps> = ({className, ...props}) => {

	const {borderClassName, Hoverable} = useTableContext();	//const hoverClassName = showHover ? "hover:bg-gray-200" : "";
	const hoverClassName = Hoverable ? " " : "";
	return (
		<tr
			{...props}
				className={twMerge(
				borderClassName,
				hoverClassName,
				className,"group")}
		/>
	)
};
export default TableRow;
