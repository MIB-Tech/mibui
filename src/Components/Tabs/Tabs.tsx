import {FC} from "react";
import {Tabs as MuiTabs} from "@mui/base";
import {twMerge} from "tailwind-merge";
import {TabsProps} from "./Tabs.types.ts";

const Tabs: FC<TabsProps> = ({className, vertical, ...props}) => (
  <MuiTabs
    {...props}
    orientation={vertical ? 'vertical' : undefined}
    className={twMerge(
      `flex gap-2`,
      '[&.MuiTabs-horizontal]:flex-col [&.MuiTabs-vertical]:flex-row',
      className
    )}
  />
)

export default Tabs

