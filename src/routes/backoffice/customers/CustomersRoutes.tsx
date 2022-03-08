import { Loadable } from "../../../components";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const CustomersPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.CustomersPage,
    }))
  )
);

const CustomerPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.CustomerPage,
    }))
  )
);

export const CustomersRoutes: RouteObject[] = [
  {
    path: "customers",
    children: [
      {
        path: "",
        element: <CustomersPage />,
      },
      {
        path: "view",
        children: [
          {
            path: ":customerId",
            element: <CustomerPage />,
          },
        ],
      },
      {
        path: "create",
        element: <CustomerPage />,
      },
      {
        path: "update",
        children: [
          {
            path: ":customerId",
            element: <CustomerPage />,
          },
        ],
      },
    ],
  },
];
