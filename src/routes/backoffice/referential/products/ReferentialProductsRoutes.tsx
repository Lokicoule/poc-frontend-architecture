import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CrumbProps, Loadable } from "../../../../components";

const ReferentialProductsPage = Loadable(
  lazy(() =>
    import("../../../../pages/backoffice/referential").then((module) => ({
      default: module.ReferentialProductsPage,
    }))
  )
);

const UpdateReferentialProductPage = Loadable(
  lazy(() =>
    import("../../../../pages/backoffice/referential").then((module) => ({
      default: module.UpdateReferentialProductPage,
    }))
  )
);

export const ReferentialProductsCrumbs: Readonly<CrumbProps> = {
  "/backoffice/referential/products": { alias: "Référentiel Clients" },
  "/backoffice/referential/products/update": {
    alias: "Mise à jour référentiel client",
    last: true,
  },
};

export const ReferentialProductsRoutes: RouteObject[] = [
  {
    path: "products",
    children: [
      {
        path: "",
        element: <ReferentialProductsPage />,
      },

      {
        path: "update",
        children: [
          {
            path: ":referentialProductId",
            element: <UpdateReferentialProductPage />,
          },
        ],
      },
    ],
  },
];
