import {FC} from "react";
import {twMerge} from "tailwind-merge";
import {Tab as MuiTab} from "@mui/base";
import {ButtonSlot} from "../Menu/Menu.Button.tsx";
import {TabProps} from "./Tabs.types.ts";

const Tab: FC<TabProps> = ({className, ...props}) => (
  <MuiTab
    slots={{
      root: props => (
        <ButtonSlot
          {...props}
          variant={props['aria-selected'] ? 'clean' : undefined}
        />
      )
    }}
    {...props}
    className={twMerge('truncate', className)}
  />
)

export default Tab;
