import { RouteObject } from "react-router-dom";
import { BackofficePage } from "../../../pages/backoffice/BackofficePage";
import { ReferentialCustomersRoutes } from "./customers/ReferentialCustomersRoutes";
import { ReferentialOrdersRoutes } from "./orders/ReferentialOrdersRoutes";
import { ReferentialProductsRoutes } from "./products/ReferentialProductsRoutes";

export const ReferentialRoutes: RouteObject = {
  path: "referential",
  children: [
    {
      path: "",
      element: <BackofficePage />,
    },
    ReferentialCustomersRoutes,
    ReferentialProductsRoutes,
    ReferentialOrdersRoutes,
  ],
};
