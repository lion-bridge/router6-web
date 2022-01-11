import { RouteObject } from "react-router-dom";
import {lazy} from 'react'

const routeList: RouteObject[] = [
  {
    path: "/",
    element: import('@/components/Layout'),
    children: [
      {
        
      }
    ]
  },
];
export default routeList;
