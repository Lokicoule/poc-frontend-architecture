import { ColumnProps, Table } from "../../../../components/Tables";
import { ReferentialViewModel } from "../../../../viewModels/referential";

export type ReferentialTableViewProps = {
  columns: ColumnProps[];
  data: ReferentialViewModel[];
};

export const ReferentialTableView = ({
  columns,
  data = [],
}: ReferentialTableViewProps) => {
  return <Table columns={columns} data={data}></Table>;
};
