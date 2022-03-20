import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CrumbProps, Loadable } from "../../../components";

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

export const CustomersCrumbs: Readonly<CrumbProps> = {
  "/backoffice/customers": { alias: "Clients" },
  "/backoffice/customers/create": {
    alias: "Nouveau client",
    last: true,
  },
  "/backoffice/customers/view": { alias: "Information client", last: true },
  "/backoffice/customers/update": {
    alias: "Mise à jour client",
    last: true,
  },
};

export const CustomersRoutes: RouteObject = {
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
};
