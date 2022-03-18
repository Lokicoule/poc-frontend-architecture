import { RouteObject } from "react-router-dom";
import { CrumbProps } from "../../components/Breadcrumbs";
import { BackofficeLayout } from "../../layouts";
import { BackofficePage } from "../../pages/backoffice/BackofficePage";
import { CustomersCrumbs, CustomersRoutes } from "./customers/CustomersRoutes";
import { OrdersCrumbs, OrdersRoutes } from "./orders/OrdersRoutes";
import { ProductsCrumbs, ProductsRoutes } from "./products/ProductsRoutes";
import {
  ReferentialCrumbs,
  ReferentialRoutes,
} from "./referential/ReferentialRoutes";

const BackofficeCrumbs: Readonly<CrumbProps> = {
  "/backoffice": { alias: "Backoffice" },
  ...CustomersCrumbs,
  ...OrdersCrumbs,
  ...ProductsCrumbs,
  ...ReferentialCrumbs,
};

export const BackofficeRoutes: RouteObject = {
  path: "backoffice",
  element: <BackofficeLayout crumbs={BackofficeCrumbs} />,
  children: [
    {
      path: "",
      element: <BackofficePage />,
    },
    ...CustomersRoutes,
    ...ProductsRoutes,
    ...OrdersRoutes,
    ...ReferentialRoutes,
  ],
};
