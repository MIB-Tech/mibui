// Table.Head.tsx
import React from "react";
import {TableHeadProps} from "../Table.types.tsx";
import {twMerge} from "tailwind-merge";
import {useTableContext} from "../Table.utils.tsx";

const TableHead: React.FC<TableHeadProps> = ({className, ...props}) => {
	const {stickyHeader} = useTableContext();

	const stickyClassNames = stickyHeader ? "text-left bg-white sticky top-0 z-10 border " : "";
	const{borderClassName} = useTableContext();
	return (

		<thead
			{...props}
			className={twMerge("text-left ",borderClassName,stickyClassNames,className)}
		/>);
};

export default TableHead;
