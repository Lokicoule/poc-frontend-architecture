import { ColumnProps, Table } from "../../../../../../components/Tables";
import { OrderItemViewModel } from "../../../../../../viewModels/orders";

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
