import {FC} from "react";
import {TabsOwnProps} from "@mui/base/Tabs/Tabs.types";
import {TabsList} from "@mui/base";
import {twMerge} from "tailwind-merge";

const MyTabslist: FC<TabsOwnProps> = ({className, ...props}) => {


  return (
    <TabsList
      {...props}
      className={twMerge(`flex `, className)}
    />
  );
};

export default MyTabslist;
