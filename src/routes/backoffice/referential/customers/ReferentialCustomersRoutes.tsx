import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CrumbProps, Loadable } from "../../../../components";

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
  "/backoffice/referential/customers": { alias: "Référentiel Clients" },
  "/backoffice/referential/customers/update": {
    alias: "Mise à jour référentiel client",
    last: true,
  },
};

export const ReferentialCustomersRoutes: RouteObject[] = [
  {
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
  },
];
