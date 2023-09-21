import {FC} from "react";
import {TabsOwnProps} from "@mui/base/Tabs/Tabs.types";
import {Tabs} from "@mui/base";
import {twMerge} from "tailwind-merge";

export const MyTabs: FC<TabsOwnProps> = ({className, ...props}) => {


  return (
    <Tabs
      {...props}
      className={twMerge(`flex`, className)}
    />
  );
};


