import { ColumnProps, Table } from "../../../../../../components/Tables";
import { ReferentialCustomersParamsViewModel } from "../../../../../../view-models/referential/customers/ReferentialCustomerViewModel";

export type ReferentialCustomersParamsTableViewProps = {
  columns: ColumnProps[];
  data: ReferentialCustomersParamsViewModel[];
};

export const ReferentialCustomersParamsTableView = ({
  columns,
  data = [],
}: ReferentialCustomersParamsTableViewProps) => {
  return <Table columns={columns} data={data}></Table>;
};
