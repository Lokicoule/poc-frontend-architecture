import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../../components/Loadable";
import { BackofficeLayout } from "../../../layouts";
import { ordersBreadcrumbs } from "./configs/breadcrumbs.config";
import { menuItems } from "./configs/menu-items.config";
import {
  featuresRoutesConfig,
  paramsRoutesConfig,
  useCasesRoutesConfig,
} from "./configs/routes.config";

const OrdersPage = Loadable(
  lazy(() =>
    import("../pages/orders/OrdersPage").then((module) => ({
      default: module.OrdersPage,
    }))
  )
);

const OrderPage = Loadable(
  lazy(() =>
    import("../pages/orders/OrderPage").then((module) => ({
      default: module.OrderPage,
    }))
  )
);

const CreateOrderPage = Loadable(
  lazy(() =>
    import("../pages/orders/CreateOrderPage").then((module) => ({
      default: module.CreateOrderPage,
    }))
  )
);

const UpdateOrderPage = Loadable(
  lazy(() =>
    import("../pages/orders/UpdateOrderPage").then((module) => ({
      default: module.UpdateOrderPage,
    }))
  )
);

const ReferentialOrderPage = Loadable(
  lazy(() =>
    import("../pages/orders/referential/ReferentialOrderPage").then(
      (module) => ({
        default: module.ReferentialOrderPage,
      })
    )
  )
);

const UpdateReferentialOrderPage = Loadable(
  lazy(() =>
    import("../pages/orders/referential/UpdateReferentiaOrderPage").then(
      (module) => ({
        default: module.UpdateReferentialOrderPage,
      })
    )
  )
);

export const OrdersRoutes: RouteObject = {
  path: featuresRoutesConfig.ordersPath,
  element: <BackofficeLayout items={menuItems} crumbs={ordersBreadcrumbs} />,
  children: [
    {
      path: "",
      element: <OrdersPage />,
    },
    {
      path: useCasesRoutesConfig.viewPath,
      children: [
        {
          path: `:${paramsRoutesConfig.id}`,
          element: <OrderPage />,
        },
      ],
    },
    {
      path: useCasesRoutesConfig.createPath,
      element: <CreateOrderPage />,
    },
    {
      path: useCasesRoutesConfig.updatePath,
      children: [
        {
          path: `:${paramsRoutesConfig.id}`,
          element: <UpdateOrderPage />,
        },
      ],
    },
    {
      path: featuresRoutesConfig.referentialPath,
      children: [
        {
          path: "",
          element: <ReferentialOrderPage />,
        },

        {
          path: useCasesRoutesConfig.updatePath,
          children: [
            {
              path: `:${paramsRoutesConfig.id}`,
              element: <UpdateReferentialOrderPage />,
            },
          ],
        },
      ],
    },
  ],
};
