import React from "react";
import {TableSizeProvider} from "./Context/Table.Context.tsx";
import {TableProps} from "./Table.types.tsx";
import {twMerge} from "tailwind-merge";


const Table: React.FC<TableProps> = ({size, borderLess, showHover, showBorder, stickyHeader, ...props}) => {

	const stickyClassNames = stickyHeader ? "max-h-80 overflow-hidden hover:overflow-auto" : "";
	return (
		<TableSizeProvider
		size={size}
		borderLess={borderLess}
		showHover={showHover}
		showBorder={showBorder}
		stickyHeader={stickyHeader}
	>
		<div className={`${stickyClassNames}`}>
			<table
				{...props}
				className={twMerge(
					'bg-white border-separate border-spacing-0 border',props.className)}
			>
			</table>
		</div>
	</TableSizeProvider>);
};

export default Table;



