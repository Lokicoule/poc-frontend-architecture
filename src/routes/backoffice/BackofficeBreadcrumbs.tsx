import { CrumbProps } from "../../components/Breadcrumbs";
import { CustomersCrumbs } from "./customers/CustomersRoutes";
import { OrdersCrumbs } from "./orders/OrdersRoutes";
import { ProductsCrumbs } from "./products/ProductsRoutes";
import { ReferentialBreadcrumbs } from "./referential/ReferentialBreadcrumbs";

export const BackofficeBreadcrumbs: Readonly<CrumbProps> = {
  "/backoffice": { alias: "Backoffice" },
  ...CustomersCrumbs,
  ...OrdersCrumbs,
  ...ProductsCrumbs,
  ...ReferentialBreadcrumbs,
};
