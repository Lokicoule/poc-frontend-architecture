import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CrumbProps, Loadable } from "../../../components";

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

const CustomerPage = Loadable(
  lazy(() =>
    import("../../../pages/backoffice").then((module) => ({
      default: module.CustomerPage,
    }))
  )
);

export const OrdersCrumbs: Readonly<CrumbProps> = {
  "/backoffice/orders": { alias: "Commandes" },
  "/backoffice/orders/create": {
    alias: "Nouvelle commande",
    last: true,
  },
  "/backoffice/orders/view": { alias: "Information commande", last: true },
  "/backoffice/orders/update": {
    alias: "Mise à jour commande",
    last: true,
  },
  "/backoffice/orders/customer": { alias: "Information client", last: true },
};

export const OrdersRoutes: RouteObject = {
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
    {
      path: "customer",
      children: [
        {
          path: ":customerId",
          element: <CustomerPage />,
        },
      ],
    },
  ],
};
