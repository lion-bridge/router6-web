import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import Menu from "@/components/menu";
import Layout from "@/components/Layout";
import AllOrders from "@/pages/Order/AllOrders";
import CreateOrder from "@/pages/Order/CreateOrder";
import Login from "@/Auth/login";
import LazyComponent from '@/components/LazyComponent'

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
        element: <Menu />,
        children: [
          {
            name: '欢迎',
            index: true,
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
                // element: lazyFunction(() => import('@/pages/Order/AllOrders'))
                element: <LazyComponent component={import('@/pages/Order/AllOrders')}/>,
              },
              {
                index: true,
                path: "create",
                name: "创建订单",
                id: 22,
                element: <LazyComponent component={import('@/pages/Order/CreateOrder')}/>,
              },
            ],
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
