import { Link } from "react-router-dom";
import { ColumnProps } from "../../../../../../components/Tables";
import { currency } from "../../../../../../core/utils/CurrencyUtils";
import { OrderViewModel } from "../../../../domain/orders.model";
import { ordersNavigationHelper } from "../../../../helpers/orders-navigation.helper";
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
        <Link to={ordersNavigationHelper.view(item.id)}>{item.code}</Link>
      ),
    },
    {
      label: "Code client",
      content: (order: OrderViewModel) => {
        return (
          <Link
            to={ordersNavigationHelper.customerView(order.customer.id ?? "")}
          >
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
