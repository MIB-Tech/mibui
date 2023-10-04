import {FC} from "react";
import {TabsList as MuiTabsList} from "@mui/base";
import {twMerge} from "tailwind-merge";
import {TabsListProps} from "./Tabs.types.ts";

const TabsList: FC<TabsListProps> = ({className, ...props}) => (
  <MuiTabsList
    {...props}
    className={twMerge(
      `h-fit w-fit flex p-1 bg-primary-500 rounded-md gap-1`,
      '[&.MuiTabsList-horizontal]:flex-row [&.MuiTabsList-vertical]:flex-col',
      className
    )}
  />
)

export default TabsList;
