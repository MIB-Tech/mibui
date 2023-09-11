import {createContext, FC} from "react";
import {BorderEnum, TableProps} from "../Table.types.tsx";
import {SizeEnum} from "../../Button/Button.types.tsx";


export const TableContext = createContext<{
	size?: SizeEnum,
	borderTypeClassName?:undefined,
	border?:BorderEnum,
	showHover?:boolean,
	showBorder?:boolean,
	stickyHeader?:boolean,
	"data-first"?:boolean}>
({size: undefined,
	border:BorderEnum.Solid,
	showHover:undefined,
	showBorder:undefined,
	stickyHeader:undefined});

export const TableSizeProvider: FC<TableProps> = ({
																										size,
																										borderLess,
																										showHover,
																										showBorder,
																										stickyHeader,
																										children}) => {

	return (
		<TableContext.Provider value={{
			size,
			border: borderLess,
			showHover,
			showBorder,
			stickyHeader}}>
			{children}
		</TableContext.Provider>
	);
};
