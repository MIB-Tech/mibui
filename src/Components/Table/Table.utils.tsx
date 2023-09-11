import  {Children, cloneElement, Fragment, isValidElement, ReactNode, useContext} from "react";
import { TableContext } from "./Context/Table.Context.tsx";
import { BorderEnum, TableHeadProps } from "./Table.types.tsx";
import {SizingType} from "../../@types/Sizing.ts";

export function getChildren(children: ReactNode, props: TableHeadProps): ReactNode {
    return Children.map(children, (child) => {
        if (isValidElement(child)) {
            if (child.type === Fragment) {
                return getChildren(child.props.children, props);
            }

            return cloneElement(child, { ...props });
        }

        return child;
    });
}

export function getSizeClass(parentSize?: SizingType): string {
    switch (parentSize) {
        case 'sm':
            return "px-5 py-2 ";
        case 'lg':
            return "px-7 py-4 ";
        default:
            return "px-6 py-3 ";
    }
}

export function borderClass(border?: BorderEnum): string {
    switch (border) {
        case BorderEnum.None:
            return "border-none";
        case BorderEnum.Solid:
            return "border border-solid";
        case BorderEnum.Dashed:
            return "border border-dashed";
        case BorderEnum.Dotted:
            return "border border-dotted ";
        default:
            return "border-b";
    }
}

export const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("useTableSizeContext must be used within a TableSizeProvider");
    }

    const cellClassName = getSizeClass(context.size);
    const borderClassName = borderClass(context.border);


    return {
        ...context,

        cellClassName,
        borderClassName,
        showHover: context.showHover ?? false,
        showBorder: context.showBorder ?? false,
        stickyHeader:context.stickyHeader ?? false


    };
};
