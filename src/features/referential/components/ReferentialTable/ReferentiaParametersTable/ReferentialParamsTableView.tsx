import { ColumnProps, Table } from "../../../../../components/Tables";
import { ReferentialParamsViewModel } from "../../../../../types/referential";

export type ReferentialParamsTableViewProps = {
  columns: ColumnProps[];
  data: ReferentialParamsViewModel[];
};

export const ReferentialParamsTableView = ({
  columns,
  data = [],
}: ReferentialParamsTableViewProps) => {
  return <Table columns={columns} data={data}></Table>;
};
