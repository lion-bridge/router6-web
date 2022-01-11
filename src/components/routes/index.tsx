import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import routeList from "@/config/route.config";

const Routers = () => {
  const routes = useRoutes(routeList);
  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default Routers;
