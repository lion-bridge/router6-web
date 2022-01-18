import { createContext, useContext } from "react";
import { RouterTabType } from "@/components/RouteTabs";

export interface ContextType {
  appName?: string;
  routerTab?: RouterTabType;
}

export const AppContext = createContext<ContextType>({});

export const useAppContext = () => {
  return useContext(AppContext);
};

export const useRouterTabContext = () => {
  return useContext(AppContext).routerTab;
};
