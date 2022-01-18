import { Tabs } from "antd";
import { nanoid } from "nanoid";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";
import { useRouterTabContext } from "../Provider/contex";

const { TabPane } = Tabs;

export interface RouterTabType {
  createTab: (tab: TabProps) => void;
  tabs: TabProps[];
  setTabs: Dispatch<SetStateAction<TabProps[]>>;
}

export interface TabProps extends NavigateOptions {
  title?: ReactNode;
  path: string;
}

export const useRouterTabs = () => {
  const [tabs, setTabs] = useState<TabProps[]>([]);
  const navigate = useNavigate();
  const createTab = (tab: TabProps) => {
    if (!tab?.path) return;
    setTabs((tabs) => [...tabs, tab]);
    const { state, replace } = tab;
    navigate(tab.path, { replace, state });
  };

  return {
    tabs,
    setTabs,
    createTab,
  };
};

interface Props {
  children?: ReactNode;
}
const RouteTabs = ({ children }: Props) => {
  const routerTab = useRouterTabContext();

  return (
    <Tabs>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1{children}
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
      {routerTab?.tabs?.map((tab) => {
        console.log("tab", tab);
        console.log("children", children);
        return (
          <TabPane tab={tab?.title} key={nanoid()}>
            {children}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default RouteTabs;
