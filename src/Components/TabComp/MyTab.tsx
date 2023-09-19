import {FC} from "react";
import {TabsOwnProps} from "@mui/base/Tabs/Tabs.types";
import {twMerge} from "tailwind-merge";
import {Tab} from "@mui/base";


export interface MyTabProps extends TabsOwnProps {
  color: "primary" | "secondary" | "danger" | "success" | "warning";
}

const MyTab: FC<MyTabProps> = ({className, color, ...props}) => {
  return (
    <Tab
      {...props}
      className={twMerge(
        `flex m-2 border-b-2 hover:border-${color}-300 hover:bg-${color}-200 active:bg-${color}-700`,
        className
      )}
    />
  );
};

export default MyTab;
