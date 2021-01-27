import React from "react";
import { RouteConfig, RouteConfigComponentProps } from "react-router-config";
import {Dashboard} from "../views/Dashboard/Dashboard";
import {Statistic} from "../views/Statistic/Statistic";

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

  // maybe use later
  {
    path: "/stats",
    key: "STATS",
    exact: false,
    component: Statistic
  },
];

export default ROUTES;
