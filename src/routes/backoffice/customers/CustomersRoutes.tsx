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

const CreateCustomerPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.CreateCustomerPage,
    }))
  )
);

const UpdateCustomerPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.UpdateCustomerPage,
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
        element: <CreateCustomerPage />,
      },
      {
        path: "update",
        children: [
          {
            path: ":customerId",
            element: <UpdateCustomerPage />,
          },
        ],
      },
    ],
  },
];
