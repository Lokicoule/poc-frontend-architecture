import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../../components/Loadable";
import { BackofficeLayout } from "../../../layouts";
import { productsBreadcrumbs } from "./configs/breadcrumbs.config";
import { menuItems } from "./configs/menu-items.config";
import {
  featuresRoutesConfig,
  paramsRoutesConfig,
  useCasesRoutesConfig,
} from "./configs/routes.config";

const ProductsPage = Loadable(
  lazy(() =>
    import("../pages/products/ProductsPage").then((module) => ({
      default: module.ProductsPage,
    }))
  )
);

const ProductPage = Loadable(
  lazy(() =>
    import("../pages/products/ProductPage").then((module) => ({
      default: module.ProductPage,
    }))
  )
);

const CreateProductPage = Loadable(
  lazy(() =>
    import("../pages/products/CreateProductPage").then((module) => ({
      default: module.CreateProductPage,
    }))
  )
);

const UpdateProductPage = Loadable(
  lazy(() =>
    import("../pages/products/UpdateProductPage").then((module) => ({
      default: module.UpdateProductPage,
    }))
  )
);

const ReferentialProductPage = Loadable(
  lazy(() =>
    import("../pages/products/referential/ReferentialProductPage").then(
      (module) => ({
        default: module.ReferentialProductPage,
      })
    )
  )
);

const UpdateReferentialProductPage = Loadable(
  lazy(() =>
    import("../pages/products/referential/UpdateReferentialProductPage").then(
      (module) => ({
        default: module.UpdateReferentialProductPage,
      })
    )
  )
);

export const ProductsRoutes: RouteObject = {
  path: featuresRoutesConfig.productsPath,
  element: <BackofficeLayout items={menuItems} crumbs={productsBreadcrumbs} />,
  children: [
    {
      path: "",
      element: <ProductsPage />,
    },
    {
      path: useCasesRoutesConfig.viewPath,
      children: [
        {
          path: `:${paramsRoutesConfig.id}`,
          element: <ProductPage />,
        },
      ],
    },
    {
      path: useCasesRoutesConfig.createPath,
      element: <CreateProductPage />,
    },
    {
      path: useCasesRoutesConfig.updatePath,
      children: [
        {
          path: `:${paramsRoutesConfig.id}`,
          element: <UpdateProductPage />,
        },
      ],
    },
    {
      path: featuresRoutesConfig.referentialPath,
      children: [
        {
          path: "",
          element: <ReferentialProductPage />,
        },

        {
          path: useCasesRoutesConfig.updatePath,
          children: [
            {
              path: `:${paramsRoutesConfig.id}`,
              element: <UpdateReferentialProductPage />,
            },
          ],
        },
      ],
    },
  ],
};
