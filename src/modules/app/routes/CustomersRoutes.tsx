import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../../components/Loadable";
import { BackofficeLayout } from "../../../layouts";
import { customersBreadcrumbs } from "./configs/breadcrumbs.config";
import { menuItems } from "./configs/menu-items.config";
import {
  featuresRoutesConfig,
  paramsRoutesConfig,
  useCasesRoutesConfig,
} from "./configs/routes.config";

const CustomersPage = Loadable(
  lazy(() =>
    import("../pages/customers/CustomersPage").then((module) => ({
      default: module.CustomersPage,
    }))
  )
);

const CustomerPage = Loadable(
  lazy(() =>
    import("../pages/customers/CustomerPage").then((module) => ({
      default: module.CustomerPage,
    }))
  )
);

const CreateCustomerPage = Loadable(
  lazy(() =>
    import("../pages/customers/CreateCustomerPage").then((module) => ({
      default: module.CreateCustomerPage,
    }))
  )
);

const UpdateCustomerPage = Loadable(
  lazy(() =>
    import("../pages/customers/UpdateCustomerPage").then((module) => ({
      default: module.UpdateCustomerPage,
    }))
  )
);

const ReferentialCustomerPage = Loadable(
  lazy(() =>
    import("../pages/customers/referential/ReferentialCustomerPage").then(
      (module) => ({
        default: module.ReferentialCustomerPage,
      })
    )
  )
);

const UpdateReferentialCustomerPage = Loadable(
  lazy(() =>
    import("../pages/customers/referential/UpdateReferentialCustomerPage").then(
      (module) => ({
        default: module.UpdateReferentialCustomerPage,
      })
    )
  )
);

export const CustomersRoutes: RouteObject = {
  path: featuresRoutesConfig.customersPath,
  element: <BackofficeLayout items={menuItems} crumbs={customersBreadcrumbs} />,
  children: [
    {
      path: "",
      element: <CustomersPage />,
    },
    {
      path: useCasesRoutesConfig.viewPath,
      children: [
        {
          path: `:${paramsRoutesConfig.id}`,
          element: <CustomerPage />,
        },
      ],
    },
    {
      path: useCasesRoutesConfig.createPath,
      element: <CreateCustomerPage />,
    },
    {
      path: useCasesRoutesConfig.updatePath,
      children: [
        {
          path: `:${paramsRoutesConfig.id}`,
          element: <UpdateCustomerPage />,
        },
      ],
    },
    {
      path: featuresRoutesConfig.referentialPath,
      children: [
        {
          path: "",
          element: <ReferentialCustomerPage />,
        },

        {
          path: useCasesRoutesConfig.updatePath,
          children: [
            {
              path: `:${paramsRoutesConfig.id}`,
              element: <UpdateReferentialCustomerPage />,
            },
          ],
        },
      ],
    },
  ],
};
