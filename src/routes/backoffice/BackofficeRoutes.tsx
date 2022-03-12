import { RouteObject } from "react-router-dom";
import { BackofficeLayout } from "../../layouts";
import { BackofficePage } from "../../pages/backoffice/BackofficePage";
import { CustomersRoutes } from "./customers/CustomersRoutes";
import { ProductsRoutes } from "./products/ProductsRoutes";

export const BackofficeRoutes: RouteObject = {
  path: "backoffice",
  element: <BackofficeLayout />,
  children: [
    {
      path: "",
      element: <BackofficePage />,
    },
    ...CustomersRoutes,
    ...ProductsRoutes,
  ],
};
