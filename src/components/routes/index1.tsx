import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import routeList from "@/config/route.config";

import Menu from "@/components/menu";
import Layout from "@/components/Layout";
import AllOrders from "@/pages/Order/AllOrders";
import Login from "@/Auth/login";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Menu />}>
            <Route element={<AllOrders />} path="/orderList"></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
