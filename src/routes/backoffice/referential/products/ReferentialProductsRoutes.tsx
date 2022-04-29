import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CrumbProps } from "../../../../components/Breadcrumbs";
import { Loadable } from "../../../../components/Loadable";

const ReferentialProductPage = Loadable(
  lazy(() =>
    import("../../../../pages/backoffice/referential").then((module) => ({
      default: module.ReferentialProductPage,
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
  "/backoffice/referential/products": { alias: "Produits" },
  "/backoffice/referential/products/update": {
    alias: "Mise à jour",
    last: true,
  },
};

export const ReferentialProductsRoutes: RouteObject = {
  path: "products",
  children: [
    {
      path: "",
      element: <ReferentialProductPage />,
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
};
