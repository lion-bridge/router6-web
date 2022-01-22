import {
  ReactNode,
  useContext,
  Context,
  createContext,
  Provider,
  useState,
} from "react";
import { useRouterTabs } from "../RouteTabs/useRouterTabs";
import { AppContext } from "./contex";

interface Props {
  children?: ReactNode;
}

const AppProvider = ({ children }: Props) => {
  const routerTab = useRouterTabs();

  return (
    <AppContext.Provider value={{ routerTab }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
