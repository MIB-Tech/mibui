// Table.Head.tsx
import React from "react";
import {TableHeadProps} from "../Table.types.tsx";
import {twMerge} from "tailwind-merge";
import {useTableContext} from "../Table.utils.tsx";

const TableHead: React.FC<TableHeadProps> = ({className, ...props}) => {
	const {borderClassName,stickyHeader} = useTableContext();
	return (

		<thead

			{...props}
			className={twMerge(
				"text-left",
				borderClassName,
				stickyHeader && "bg-white sticky top-0 z-10  hover:drop-shadow-lg ",

				className
			)}
		/>);
};

export default TableHead;
