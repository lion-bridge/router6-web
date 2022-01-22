import { createContext, useContext } from "react";
import { RouterTabType } from "@/components/RouteTabs/interface";

export interface ContextType {
  appName?: string;
  routerTab?: RouterTabType;
}

export const AppContext = createContext<ContextType>({});
/**
 * 全局上下文
 * @returns 
 */
export const useAppContext = () => {
  return useContext(AppContext);
};
/**
 * 页签上下文
 * @returns 
 */
export const useRouterTabContext = () => {
  return useContext(AppContext).routerTab;
};
