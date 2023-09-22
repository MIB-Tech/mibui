import {FC} from "react";
import {MyTabs} from "./MyTabs";
import MyTabslist from "./MyTabList";
import MyTabPanel from "./MyTabPanel";
import MyTab from "./MyTab";
import {TabsOwnProps} from "@mui/base/Tabs/Tabs.types";

interface TabData {
  label: JSX.Element;
  content: JSX.Element;
  value: number;
}

interface TabCompProps extends TabsOwnProps {
  tabs: TabData[];
}

const TabComp: FC<TabCompProps> = ({tabs, orientation,
                                     //color,
                                     ...props}) => {
  const Orient = () => {
    if (orientation === "vertical") {
      return "flex-row";
    } else if (orientation === "horizontal") {
      return "flex-col";
    } else {
      return "";
    }
  };

  const Orient2 = () => {
    if (orientation === "horizontal") {
      return "flex-row";
    } else if (orientation === "vertical") {
      return "flex-col";
    } else {
      return "";
    }
  };

  const tabComponents = tabs.map((tab) => (
    <MyTab
      //color={color}
      key={tab.value}
      value={tab.value}>
      {tab.label}
    </MyTab>
  ));

  const MyTabpanel = tabs.map((tab) => (
    <MyTabPanel key={tab.value} value={tab.value}>
      {tab.content}
    </MyTabPanel>

  ));

  return (
    <div>
      <MyTabs
        {...props}
        className={`flex ${Orient()}`}>
        <MyTabslist className={`flex ${Orient2()}`}>
          {tabComponents}
        </MyTabslist>
        {MyTabpanel}
      </MyTabs>
    </div>
  );
};

export default TabComp;
