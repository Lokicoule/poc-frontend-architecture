import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CrumbProps, Loadable } from "../../../../components";

const ReferentialOrdersPage = Loadable(
  lazy(() =>
    import("../../../../pages/backoffice/referential").then((module) => ({
      default: module.ReferentialOrdersPage,
    }))
  )
);

const UpdateReferentialOrderPage = Loadable(
  lazy(() =>
    import("../../../../pages/backoffice/referential").then((module) => ({
      default: module.UpdateReferentialOrderPage,
    }))
  )
);

export const ReferentialOrdersCrumbs: Readonly<CrumbProps> = {
  "/backoffice/referential/orders": { alias: "Commandes" },
  "/backoffice/referential/orders/update": {
    alias: "Mise à jour",
    last: true,
  },
};

export const ReferentialOrdersRoutes: RouteObject = {
  path: "orders",
  children: [
    {
      path: "",
      element: <ReferentialOrdersPage />,
    },

    {
      path: "update",
      children: [
        {
          path: ":referentialOrderId",
          element: <UpdateReferentialOrderPage />,
        },
      ],
    },
  ],
};
