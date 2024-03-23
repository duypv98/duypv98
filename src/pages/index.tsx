import { RouteObject } from "react-router-dom";
import HomePage from "./home";

export const routerObjects: Array<RouteObject & { title?: string; children?: Array<RouteObject & { title?: string }> }> = [
  {
    path: "/",
    element: <HomePage />,
    title: "Home"
  }
];

export const appBaseName = process.env.NODE_ENV === "production" ? "/duypv98" : undefined;