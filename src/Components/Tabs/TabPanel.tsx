import {FC} from "react";
import {TabPanel as MuiTabPanel} from "@mui/base";
import {twMerge} from "tailwind-merge";
import {TabPanelProps} from "./Tabs.types.ts";

const TabPanel: FC<TabPanelProps> = ({className, ...props}) => (
  <MuiTabPanel
    {...props}
    className={twMerge(`p-2.5`, className)}
  />
)

export default TabPanel;
