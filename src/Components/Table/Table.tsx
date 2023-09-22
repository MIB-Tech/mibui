import React from "react";
import {TableSizeProvider} from "./Context/Table.Context.tsx";
import {TableProps} from "./Table.types.tsx";
import {twMerge} from "tailwind-merge";


const Table: React.FC<TableProps> = ({size, borderStyle, Hoverable, borderLess, stickyHeader,stickyColumn, ...props}) => {

	const Header = stickyHeader ? " max-h-80 overflow-y-scroll" : ""; // max-h-80 generic !!!
	const Column = stickyColumn ? "overflow-x-scroll" : "";// max-h-80 generic !!!

	return (
		<TableSizeProvider
		size={size}
		borderStyle={borderStyle}
		Hoverable={Hoverable}
		borderLess={borderLess}
		stickyHeader={stickyHeader}
		stickyColumn={stickyColumn}
	>
		<div className={`${Header} ${Column}`}>
			<table
				{...props}
				className={twMerge("border-separate border-spacing-0 bg-white", props.className)}
			>
			</table>

		</div>
	</TableSizeProvider>);
};

export default Table;



