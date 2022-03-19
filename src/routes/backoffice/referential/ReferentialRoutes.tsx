import { RouteObject } from "react-router-dom";
import { CrumbProps } from "../../../components/Breadcrumbs";
import { BackofficePage } from "../../../pages/backoffice/BackofficePage";
import {
  ReferentialCustomersCrumbs,
  ReferentialCustomersRoutes,
} from "./customers/ReferentialCustomersRoutes";
import {
  ReferentialOrdersCrumbs,
  ReferentialOrdersRoutes,
} from "./orders/ReferentialOrdersRoutes";
import {
  ReferentialProductsCrumbs,
  ReferentialProductsRoutes,
} from "./products/ReferentialProductsRoutes";

export const ReferentialCrumbs: Readonly<CrumbProps> = {
  "/referential": { alias: "Referential" },
  ...ReferentialCustomersCrumbs,
  ...ReferentialProductsCrumbs,
  ...ReferentialOrdersCrumbs,
};

export const ReferentialRoutes: RouteObject[] = [
  {
    path: "referential",
    children: [
      {
        path: "",
        element: <BackofficePage />,
      },
      ...ReferentialCustomersRoutes,
      ...ReferentialProductsRoutes,
      ...ReferentialOrdersRoutes,
    ],
  },
];
