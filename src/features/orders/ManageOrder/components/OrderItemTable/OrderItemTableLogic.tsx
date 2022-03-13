import { ColumnProps } from "../../../../../components";
import {
  OrderItemTableView,
  OrderItemTableViewProps,
} from "./OrderItemTableView";

export type ManageOrderViewProps = Pick<OrderItemTableViewProps, "data">;

export const OrderItemTableLogic = ({ data }: ManageOrderViewProps) => {
  const columns: ColumnProps[] = [
    {
      label: "Code produit",
      path: "product.code",
      key: "product.code",
      sortable: true,
    },
    {
      label: "Label produit",
      path: "product.label",
      key: "product.label",
      sortable: true,
    },
    {
      label: "Quantité",
      path: "amount",
      key: "amount",
      sortable: true,
    },
    {
      label: "Prix unitaire",
      path: "unitPrice",
      key: "unitPrice",
      sortable: true,
    },
  ];

  return (
    <OrderItemTableView columns={columns} data={data}></OrderItemTableView>
  );
};
