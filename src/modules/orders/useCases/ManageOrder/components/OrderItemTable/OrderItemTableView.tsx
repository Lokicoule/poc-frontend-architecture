import { ColumnProps, Table } from "../../../../../../components/Tables";
import { OrderItemViewModelProps } from "../../../../domain/order-item.model";

export type OrderItemTableViewProps = {
  columns: ColumnProps[];
  data: OrderItemViewModelProps[];
};

export const OrderItemTableView = ({
  columns,
  data,
}: OrderItemTableViewProps) => {
  return <Table columns={columns} data={data}></Table>;
};
