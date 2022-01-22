import { Tabs } from "antd";
import { nanoid } from "nanoid";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  NavigateOptions,
  useNavigate,
  useOutlet,
  matchRoutes,
  useLocation,
} from "react-router-dom";
import { useRouterTabContext } from "../Provider/contex";
import routeList from "@/config/route.config";
import { TabProps } from "./interface";

export const useRouterTabs = () => {
  const [tabs, setTabs] = useState<TabProps[]>([]);
  const [activeKey, setActiveKey] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("useRouterTabs");
  /**
   * 查找不到则创建
   * @param tab
   * @returns
   */
  const createTab = (tab: TabProps) => {
    if (!tab?.path) return;
    const { state, replace } = tab;
    const targetTab = tabs?.find((v) => v?.path === tab?.path);
    if (targetTab?.path) { // 不创建tab
      setActiveKey(targetTab.path);
    } else {
      setTabs((tabs) => [...tabs, tab]);
    }
    if (targetTab?.path !== location?.pathname) {
      navigate(tab.path, { replace, state });
    }
  };

  const closeCurrentTab = (path: string) => {
    setTabs((tabs) => tabs.filter((v) => v?.path !== path));
  };
  return {
    tabs,
    setTabs,
    createTab,
    activeKey,
    setActiveKey,
    closeCurrentTab,
  };
};
