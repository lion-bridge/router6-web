import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import Menu from "@/components/menu"
import Layout from "@/components/Layout"
import AllOrders from "@/pages/Order/AllOrders"
import Login from "@/Auth/login"
const routeList: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Menu />,
        children: [
          {
            index: true,
            element:  <AllOrders />,
          },
          {
            path: "/orderList",
            element: <AllOrders />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
export default routeList;
