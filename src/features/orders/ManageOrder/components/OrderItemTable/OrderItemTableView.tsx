import { ColumnProps, Table } from "../../../../../components";
import { OrderItemViewModel } from "../../../../../view-models/orders";

export type OrderItemTableViewProps = {
  columns: ColumnProps[];
  data: OrderItemViewModel[];
};

export const OrderItemTableView = ({
  columns,
  data,
}: OrderItemTableViewProps) => {
  return <Table columns={columns} data={data}></Table>;
};
