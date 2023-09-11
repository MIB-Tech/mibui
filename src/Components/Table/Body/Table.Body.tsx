import React from "react";
import {TableHeadProps} from "../Table.types.tsx";
import {useTableContext} from "../Table.utils.tsx";
import {twMerge} from "tailwind-merge";

const TableBody: React.FC<TableHeadProps> = ({className,...props}) => {
	const {cellClassName} = useTableContext();
	return (
			<tbody {...props} className={
				twMerge(
				cellClassName,
				className)}>
			</tbody>
);
};

export default TableBody;
