import { RouteObject } from "react-router-dom";
import { BackofficeLayout } from "../../layouts";
import { BackofficePage } from "../../pages/backoffice/BackofficePage";
import { BackofficeBreadcrumbs } from "./BackofficeBreadcrumbs";
import { BackofficeMenuItems } from "./BackofficeMenuItems";
import { CustomersRoutes } from "./customers/CustomersRoutes";
import { OrdersRoutes } from "./orders/OrdersRoutes";
import { ProductsRoutes } from "./products/ProductsRoutes";
import { ReferentialRoutes } from "./referential/ReferentialRoutes";

export const BackofficeRoutes: RouteObject = {
  path: "backoffice",
  element: (
    <BackofficeLayout
      items={BackofficeMenuItems}
      crumbs={BackofficeBreadcrumbs}
    />
  ),
  children: [
    {
      path: "",
      element: <BackofficePage />,
    },
    CustomersRoutes,
    ProductsRoutes,
    OrdersRoutes,
    ReferentialRoutes,
  ],
};
