import React from "react";
import { RouteConfig, RouteConfigComponentProps } from "react-router-config";
import {Dashboard} from "../views/Dashboard/Dashboard";

export interface Config extends RouteConfig {
  component:
    | React.ComponentType<RouteConfigComponentProps<any>>
    | React.ComponentType;
}

const ROUTES: Config[] = [
  {
    path: "/",
    key: "MAIN",
    exact: true,
    component: Dashboard
  },
  {
    path: "/stats",
    key: "STATS",
    exact: false,
    component: () => <div>SHITIIITITIT</div>
  },
];

export default ROUTES;
