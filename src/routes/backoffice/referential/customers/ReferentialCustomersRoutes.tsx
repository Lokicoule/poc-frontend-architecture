import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CrumbProps } from "../../../../components/Breadcrumbs";
import { Loadable } from "../../../../components/Loadable";

const ReferentialCustomersPage = Loadable(
  lazy(() =>
    import("../../../../pages/backoffice/referential").then((module) => ({
      default: module.ReferentialCustomersPage,
    }))
  )
);

const UpdateReferentialCustomerPage = Loadable(
  lazy(() =>
    import("../../../../pages/backoffice/referential").then((module) => ({
      default: module.UpdateReferentialCustomerPage,
    }))
  )
);

export const ReferentialCustomersCrumbs: Readonly<CrumbProps> = {
  "/backoffice/referential/customers": { alias: "Clients" },
  "/backoffice/referential/customers/update": {
    alias: "Mise à jour",
    last: true,
  },
};

export const ReferentialCustomersRoutes: RouteObject = {
  path: "customers",
  children: [
    {
      path: "",
      element: <ReferentialCustomersPage />,
    },

    {
      path: "update",
      children: [
        {
          path: ":referentialCustomerId",
          element: <UpdateReferentialCustomerPage />,
        },
      ],
    },
  ],
};
