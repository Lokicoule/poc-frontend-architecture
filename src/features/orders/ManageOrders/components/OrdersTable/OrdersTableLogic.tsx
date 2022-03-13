import { Link } from "react-router-dom";
import { Order } from "../../../../../api/types/types.generated";
import { ColumnProps } from "../../../../../components/Tables";
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
      content: (item: Order) => (
        <Link to={`/backoffice/orders/view/${item.id}`}>{item.code}</Link>
      ),
    },
    {
      label: "Montant commande",
      key: "totalOrder",
      sortable: true,
      content: (order: Order) =>
        order.items?.reduce(
          (acc, item) => acc + item.unitPrice * item.amount,
          0
        ),
    },
    {
      label: "Date commande",
      path: "billingDate",
      key: "billingDate",
      sortable: true,
    },
    {
      label: "Date échéance",
      path: "dueDate",
      key: "dueDate",
      sortable: true,
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
