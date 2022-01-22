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


export interface RouterTabType {
  createTab: (tab: TabProps) => void;
  tabs: TabProps[];
  setTabs: Dispatch<SetStateAction<TabProps[]>>;
  activeKey: string;
  setActiveKey: Dispatch<SetStateAction<string>>;
  closeCurrentTab: (path: string) => void;  
}

export interface TabProps extends NavigateOptions {
  title?: ReactNode;
  path: string;
  element?: ReactNode;
}