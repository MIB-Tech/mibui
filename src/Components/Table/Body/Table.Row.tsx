import React from "react";
import {useTableContext} from "../Table.utils.tsx";
import {TableRowProps} from "../Table.types.tsx";
import {twMerge} from "tailwind-merge";


const TableRow: React.FC<TableRowProps> = ({className, ...props}) => {

	const {borderClassName, showHover} = useTableContext();	//const hoverClassName = showHover ? "hover:bg-gray-200" : "";
	const hoverClassName = showHover ? "hover:bg-gray-200 bg-white cursor-pointer  " : "";
	return (

		<tr
			{...props}
			className={twMerge(
				borderClassName,
				hoverClassName,
				className)}
		/>)
};
export default TableRow;
