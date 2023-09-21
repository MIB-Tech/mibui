import {FC} from "react";
import {TabsOwnProps} from "@mui/base/Tabs/Tabs.types";
import {TabPanel} from "@mui/base";
import {twMerge} from "tailwind-merge";

const MyTabPanel: FC<TabsOwnProps> = ({
                                        className,
                                        ...props
                                      }) => {


  return (
    <TabPanel
      {...props}
      className={twMerge(`flex  `, className)}
    >
    </TabPanel>
  );
};

export default MyTabPanel;
