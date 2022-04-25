import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CrumbProps } from "../../../components/Breadcrumbs";
import { Loadable } from "../../../components/Loadable";

const ProductsPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.ProductsPage,
    }))
  )
);

const ProductPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.ProductPage,
    }))
  )
);

const CreateProductPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.CreateProductPage,
    }))
  )
);

const UpdateProductPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.UpdateProductPage,
    }))
  )
);

export const ProductsCrumbs: Readonly<CrumbProps> = {
  "/backoffice/products": { alias: "Produits" },
  "/backoffice/products/create": {
    alias: "Nouveau produit",
    last: true,
  },
  "/backoffice/products/view": { alias: "Information produit", last: true },
  "/backoffice/products/update": {
    alias: "Mise à jour produit",
    last: true,
  },
};

export const ProductsRoutes: RouteObject = {
  path: "products",
  children: [
    {
      path: "",
      element: <ProductsPage />,
    },
    {
      path: "view",
      children: [
        {
          path: ":productId",
          element: <ProductPage />,
        },
      ],
    },
    {
      path: "create",
      element: <CreateProductPage />,
    },
    {
      path: "update",
      children: [
        {
          path: ":productId",
          element: <UpdateProductPage />,
        },
      ],
    },
  ],
};
