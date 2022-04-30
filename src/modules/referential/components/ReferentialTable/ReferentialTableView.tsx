import { ColumnProps, Table } from "../../../../components/Tables";

export type ReferentialTableViewProps = {
  columns: ColumnProps[];
  data: any[];
};

export const ReferentialTableView = ({
  columns,
  data = [],
}: ReferentialTableViewProps) => {
  return <Table columns={columns} data={data}></Table>;
};
