import {createContext, FC} from "react";
import {BorderEnum, TableProps} from "../Table.types.tsx";
import {SizingType} from "../../../@types/Sizing.ts";


export const TableContext = createContext<{
	size?: SizingType,
	borderStyle?:BorderEnum,
	Hoverable?:boolean,
	borderLess?:boolean,
	stickyHeader?:boolean,
	stickyColumn?:boolean,
	}>
({size: undefined,
	borderStyle:BorderEnum.Solid,
	Hoverable:undefined,
	borderLess:undefined,
	stickyHeader:undefined,
	stickyColumn:undefined});

export const TableSizeProvider: FC<TableProps> = ({
																										size,
																										borderStyle,
																										Hoverable,
																										borderLess,
																										stickyHeader,
																										stickyColumn,
																										children}) => {

	return (
		<TableContext.Provider value={{
			size,
			borderStyle: borderStyle,
			Hoverable: Hoverable,
			borderLess: borderLess,
			stickyHeader,
			stickyColumn}}>
			{children}
		</TableContext.Provider>
	);
};
