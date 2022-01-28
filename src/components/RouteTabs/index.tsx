import { Tabs } from "antd";
import { nanoid } from "nanoid";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  NavigateOptions,
  useNavigate,
  useOutlet,
  matchRoutes,
  useLocation,
  useOutletContext,
} from "react-router-dom";
import { useRouterTabContext } from "../Provider/contex";
import routeList from "@/config/route.config";

const { TabPane } = Tabs;

interface Props {
  children?: ReactNode;
}
/**
 * RouteTabs组件
 * @param param0
 * @returns
 */
const RouteTabs = ({ children }: Props) => {
  const routerTab = useRouterTabContext();
  const location = useLocation();

  useEffect(() => {
    const match = matchRoutes(routeList, location);
    console.log("match", match);
    const targetRoute = match?.find((v) => v?.pathname === location?.pathname);
    
    const targeTab = routerTab?.tabs?.find(
      (v) => v?.path === location?.pathname
    );
    console.log("targetRoute", targetRoute);
    if (location?.pathname === '/') {
      return;
    }
    if (!routerTab?.tabs?.length && targetRoute) {
      // 首次没有tab
      routerTab?.setTabs([
        {
          title: (targetRoute?.route as any)?.name,
          path: targetRoute.pathname,
          element: targetRoute?.route?.element,
        },
      ]);
      routerTab?.setActiveKey(targetRoute.pathname);
    }
    if (routerTab?.tabs?.length) {
      routerTab?.setTabs((tabs) =>
        tabs?.map((tab) => {
          if (tab?.path === targeTab?.path && !tab.element) {
            // tab里没有element
            tab.element = targetRoute?.route?.element;
          }
          return tab;
        })
      );
    }
  }, [location]);
  const onDelete = (targetKey: any, action: "add" | "remove") => {
    routerTab?.closeCurrentTab(targetKey);
  };
  const TabPaneList = useMemo(() => {
    console.log("routerTab?.tabs", routerTab?.tabs);
    return routerTab?.tabs?.map((tab) => {
      return (
        <TabPane forceRender tab={tab?.title} key={tab?.path}>
          {tab?.element}
        </TabPane>
      );
    });
  }, [routerTab?.tabs]);
  return (
    <Tabs
      activeKey={routerTab?.activeKey}
      type="editable-card"
      onEdit={onDelete}
      hideAdd
      onChange={(activeKey) => {
        routerTab?.setActiveKey(activeKey);
        routerTab?.createTab({ path: activeKey });
      }}
    >
      {routerTab?.tabs?.map((tab) => {
        return (
          <TabPane forceRender tab={tab?.title} key={tab?.path}>
            {tab?.element}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default RouteTabs;
