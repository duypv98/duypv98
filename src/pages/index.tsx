import { RouteObject } from "react-router-dom";
import HomePage from "./home";
import PayPalIntegrationPage from "./paypal-integration";

export const routerObjects: Array<RouteObject & { title?: string; children?: Array<RouteObject & { title?: string }> }> = [
  {
    path: "/",
    element: <HomePage />,
    title: "Home"
  },
  {
    path: "/paypal-integration",
    element: <PayPalIntegrationPage />,
    title: "PayPal Integration",
    children: [
      {
        path: "1-retrieve-api-token",
        title: "1. Retrieve API Access Token"
      },
      {
        path: "2-call-orders-api",
        title: "2. Call Orders API"
      },
      {
        path: "3-checkout",
        title: "3. PayPal Checkout"
      }
    ]
  }
];

export const appBaseName = process.env.NODE_ENV === "production" ? "/duypv98" : undefined;