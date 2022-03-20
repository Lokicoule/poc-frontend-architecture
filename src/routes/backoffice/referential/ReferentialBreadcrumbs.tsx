import { CrumbProps } from "../../../components/Breadcrumbs";
import { ReferentialCustomersCrumbs } from "./customers/ReferentialCustomersRoutes";
import { ReferentialOrdersCrumbs } from "./orders/ReferentialOrdersRoutes";
import { ReferentialProductsCrumbs } from "./products/ReferentialProductsRoutes";

export const ReferentialBreadcrumbs: Readonly<CrumbProps> = {
  "/backoffice/referential": { alias: "Référentiel" },
  ...ReferentialCustomersCrumbs,
  ...ReferentialProductsCrumbs,
  ...ReferentialOrdersCrumbs,
};
