import { ColumnProps, Table } from "../../../../../../components/Tables";
import { ReferentialCustomerViewModel } from "../../../../../../view-models/referential/customers/ReferentialCustomerViewModel";

export type ReferentialCustomersTableViewProps = {
  columns: ColumnProps[];
  data: ReferentialCustomerViewModel[];
};

export const ReferentialCustomersTableView = ({
  columns,
  data = [],
}: ReferentialCustomersTableViewProps) => {
  return <Table columns={columns} data={data}></Table>;
};
