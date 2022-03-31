import { Link } from "react-router-dom";
import { ColumnProps } from "../../../../../components/Tables";
import { OrderViewModel } from "../../../../../viewModels/orders";
import { currency } from "../../../../../utils/CurrencyUtils";
import { OrdersTableView, OrdersTableViewProps } from "./OrdersTableView";

export type OrdersTableLogicProps = Pick<
  OrdersTableViewProps,
  "data" | "onRemove"
>;

export const OrdersTableLogic = ({
  data = [],
  onRemove,
}: OrdersTableLogicProps) => {
  const columns: ColumnProps[] = [
    {
      label: "Code commande",
      key: "code",
      sortable: true,
      content: (item: OrderViewModel) => (
        <Link to={`/backoffice/orders/view/${item.id}`}>{item.code}</Link>
      ),
    },
    {
      label: "Code client",
      content: (order: OrderViewModel) => {
        return (
          <Link to={`/backoffice/orders/customer/${order.customer.id}`}>
            {order.customer.code}
          </Link>
        );
      },
      key: "customer.code",
      sortable: true,
    },
    {
      label: "Montant commande",
      key: "totalOrder",
      sortable: true,
      content: (order: OrderViewModel) =>
        currency.format(
          order.items?.reduce(
            (acc, item) => acc + item.unitPrice * item.amount,
            0
          ) || 0
        ),
    },
    {
      label: "Date commande",
      key: "billingDate",
      sortable: true,
      content: (order: OrderViewModel) =>
        new Date(order.billingDate).toLocaleDateString(),
    },
    {
      label: "Date échéance",
      key: "dueDate",
      sortable: true,
      content: (order: OrderViewModel) =>
        new Date(order.dueDate).toLocaleDateString(),
    },
  ];
  return (
    <OrdersTableView
      columns={columns}
      data={data}
      onRemove={onRemove}
    ></OrdersTableView>
  );
};
