import { Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";
import Menu from "@/components/menu";
import Layout from "@/components/Layout";
import AllOrders from "@/pages/Order/AllOrders";
import CreateOrder from "@/pages/Order/CreateOrder";
import Login from "@/Auth/login";
import LazyComponent from "@/components/LazyComponent";

export interface RouteObjectType {
  id?: number;
  name?: string;
  caseSensitive?: boolean;
  children?: RouteObjectType[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
}

const routeList: RouteObjectType[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        name: "全部订单",
        index: true,
        id: 22,
        element: (
          <Navigate to='/order/orderList' replace={true}/>
        ),
      },
      {
        name: "订单管理",
        path: "order",
        id: 22,
        children: [
          {
            path: "orderList",
            name: "全部订单",
            id: 22,
            element: (
              <LazyComponent component={import("@/pages/Order/AllOrders")} />
            ),
          },
          {
            path: "create",
            name: "创建订单",
            id: 22,
            children: [
              {
                index: true,
                element: (
                  <LazyComponent component={import("@/pages/Order/CreateOrder")} />
                ),
              },
              {
                path: ":id",
                id: 22,
                element: (
                  <LazyComponent component={import("@/pages/Order/CreateOrder")} />
                ),
              },
            ],
          },
          {
            path: 'modify',
            name: '改单管理',
            id: 23,
            element: (
              <LazyComponent component={import("@/pages/Order/ModifyOrder")} />
            ),
          }
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
