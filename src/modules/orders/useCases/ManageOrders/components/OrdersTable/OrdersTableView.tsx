import {
  ColumnProps,
  EnhancedTable,
} from "../../../../../../components/Tables";
import { OrderViewModel } from "../../../../../../viewModels/orders";

export type OrdersTableViewProps = {
  columns: ColumnProps[];
  data: OrderViewModel[];
  onRemove: (ids: string[]) => Promise<void>;
};

export const OrdersTableView = ({
  columns,
  data = [],
  onRemove,
}: OrdersTableViewProps) => {
  return (
    <EnhancedTable
      columns={columns}
      data={data}
      title="Liste commandes"
      onRemove={onRemove}
    ></EnhancedTable>
  );
};
