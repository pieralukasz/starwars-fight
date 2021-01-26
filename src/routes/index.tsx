import React from "react";
import { RouteConfig, RouteConfigComponentProps } from "react-router-config";
import DashboardView from "../views/DashboardView";

export interface Config extends RouteConfig {
  component:
    | React.ComponentType<RouteConfigComponentProps<any>>
    | React.ComponentType;
}

const ROUTES: Config[] = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: DashboardView
  },
  {
    path: "/stats",
    key: "STAT",
    exact: false,
    component: () => <div>SHITIIITITIT</div>
  },
];

export default ROUTES;
