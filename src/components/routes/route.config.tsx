import { RouteObject } from "react-router-dom";
import {lazy} from 'react'

const routeList: RouteObject[] = [
  {
    path: "/",
    element: import('@/components/Layout'),
    children: [
      {
        element: import('@/components/menu'),
      }
    ]
  },
];
export default routeList;
