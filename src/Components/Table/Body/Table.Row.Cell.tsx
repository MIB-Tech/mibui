import {useTableContext} from '../Table.utils.tsx';
import {CellProps} from '../Table.types.tsx';
import React from 'react';
import {twMerge} from 'tailwind-merge';

const TableRowCell: React.FC<CellProps> = ({className, ...props}) => {
	const {
		borderClassName,
		bordered,
		hoverable,
		stickyColumn,
		cellClassName,
	} = useTableContext();

	return (
		<td
			{...props}
			className={twMerge(
				'group-last:border-b-0',
				cellClassName,
				borderClassName,
				stickyColumn && 'first:sticky first:backdrop-blur-md first:bg-gray-50/30 left-0 first:border-r-2',
				hoverable && 'group-hover:bg-gray-50 cursor-pointer',
				bordered && 'border-r first:border-l',
				className
			)}
		/>
	);
};
export default TableRowCell;
