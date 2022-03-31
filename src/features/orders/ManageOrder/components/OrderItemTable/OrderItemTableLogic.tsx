import { ColumnProps } from "../../../../../components";
import { currency } from "../../../../../utils/CurrencyUtils";
import { OrderItemViewModel } from "../../../../../viewModels/orders";
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
      key: "unitPrice",
      sortable: true,
      content: (item: OrderItemViewModel, idx: number) =>
        currency.format(item.unitPrice),
    },
    {
      label: "Somme",
      key: "sum",
      sortable: true,
      content: (item: OrderItemViewModel, idx: number) =>
        currency.format(item.unitPrice * item.amount),
    },
  ];

  return (
    <OrderItemTableView columns={columns} data={data}></OrderItemTableView>
  );
};
