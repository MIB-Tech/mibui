import {FC} from "react";
import {TabsOwnProps} from "@mui/base/Tabs/Tabs.types";
import {twMerge} from "tailwind-merge";
import {Tab} from "@mui/base";



const MyTab: FC<TabsOwnProps> = ({className,
                                   //color,
                                   ...props}) => {
  return (
    <Tab
      {...props}
      className={twMerge(
        `flex m-2 border-b-2 `,
        className
      )}
    />
  );
};

export default MyTab;
