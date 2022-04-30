import { ColumnProps, EnhancedTable } from "../../../../components/Tables";
import { CustomerViewModel } from "../../domain/CustomerViewModel";

export type CustomersTableViewProps = {
  columns: ColumnProps[];
  data: CustomerViewModel[];
  onRemove: (ids: string[]) => Promise<void>;
};

export const CustomersTableView = ({
  columns,
  data = [],
  onRemove,
}: CustomersTableViewProps) => {
  return (
    <EnhancedTable
      columns={columns}
      data={data}
      title="Liste clients"
      onRemove={onRemove}
    ></EnhancedTable>
  );
};
