import { FC, useState } from 'react';
import { Table, TableHead, TableHeadCell, TableRow, TableRowCell } from "../Table";
import { TableProps } from "../Table/Table.types.tsx";
import { ClickAwayListener } from "@mui/base";
import Popover from "../Popover/Popover.tsx";
import {Button} from "../Button";
import DataGridControl from "./DataGrid.control.tsx";

export enum GridColType {
	String = 'string',
	Number='number'
}

export type Column<Field extends string> = {
	field: Field;
	/** default: field */
	headerName?: string | number;
	/** default: GridColType.String */
	type?: GridColType;
	editable?: boolean;
};

export type DataGridProps<T extends object> = {
	columns: Array<Column<Extract<keyof T, string>>>;
	value?: Array<T>;
	onChange?: (value: Array<T>) => any;
} & Omit<TableProps, 'onChange'>;
const DataGrid: FC<DataGridProps<any>> = ({ columns, value = [], onChange, ...props }) => {
	const [focused, setFocused] = useState<{ rowIndex: number, field: string }>();

	const handleApplyButtonClick = (newValue: string) => {
		if (focused !== undefined) {
			onChange?.(
				value.map((row, index) => {
					if (index === focused.rowIndex) {
						return { ...row, [focused.field]: newValue };
					}
					return row;
				})
			);
			setFocused(undefined);
		}
	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(
			value.map((r, _rowIndex) => {
				if (focused && focused.rowIndex === _rowIndex) {
					return {
						...r,
						[focused.field]: e.target.value,
					};
				}
				return r;
			})
		);
	};
	return (
		<Table {...props}>
			<TableHead className='whitespace-nowrap'>
				{columns.map(({ field, headerName }, index) => (
					<TableHeadCell key={index}>
						{typeof headerName === 'undefined' ? field : headerName}
					</TableHeadCell>
				))}
			</TableHead>
			{value.map((row, rowIndex) => (
				<TableRow key={rowIndex}>
					{columns.map(({ field, editable }, cellIndex) => {
						return (
							<TableRowCell
								key={cellIndex}
								className='hover:ring-2 ring-primary-300 cursor-pointer'
								onClick={({ detail }) => {
									if (!editable) return
									if (detail === 2) {
										setFocused({ rowIndex, field })
									}
								}}
							>
								{focused && focused.rowIndex === rowIndex && focused.field === field ? (
									<ClickAwayListener
										onClickAway={() => {
											setFocused(undefined)
										}}
									>
										<Popover
											open
											content={
												<div className="flex flex-col space-y-2">
													<DataGridControl
														value={row[field]}
														onChange={handleInputChange}

													/>
													<Button
														size='sm'
														className='w-full'
														onClick={() => handleApplyButtonClick(row[field])}
													>
														Apply
													</Button>
												</div>
											}
										>
											<span>{row[field]}</span>
										</Popover>
									</ClickAwayListener>
								) : (
									row[field]
								)}
							</TableRowCell>
						);
					})}
				</TableRow>
			))}
		</Table>
	);
};

export default DataGrid;