import { Loadable } from "../../../components";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

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

export const ProductsRoutes: RouteObject[] = [
  {
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
  },
];
