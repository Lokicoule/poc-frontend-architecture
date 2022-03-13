import { Loadable } from "../../../components";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const OrdersPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.OrdersPage,
    }))
  )
);

const OrderPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.OrderPage,
    }))
  )
);

const CreateOrderPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.CreateOrderPage,
    }))
  )
);

const UpdateOrderPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.UpdateOrderPage,
    }))
  )
);

export const OrdersRoutes: RouteObject[] = [
  {
    path: "orders",
    children: [
      {
        path: "",
        element: <OrdersPage />,
      },
      {
        path: "view",
        children: [
          {
            path: ":orderId",
            element: <OrderPage />,
          },
        ],
      },
      {
        path: "create",
        element: <CreateOrderPage />,
      },
      {
        path: "update",
        children: [
          {
            path: ":orderId",
            element: <UpdateOrderPage />,
          },
        ],
      },
    ],
  },
];
