import { useRoutes } from "react-router-dom";
import { AuthenticationRoutes } from "./AuthenticationRoutes";
import { CoreRoutes } from "./CoreRoutes";
import { CustomersRoutes } from "./CustomersRoutes";
import { OrdersRoutes } from "./OrdersRoutes";
import { ProductsRoutes } from "./ProductsRoutes";

export const Routes = () =>
  useRoutes([
    ...CoreRoutes,
    AuthenticationRoutes,
    CustomersRoutes,
    OrdersRoutes,
    ProductsRoutes,
  ]);
