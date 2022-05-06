import { ColumnProps, Table } from "../../../../components/Tables";

export type ReferentialTableViewProps<TypeReferentialViewModel> = {
  columns: ColumnProps[];
  data: TypeReferentialViewModel[];
};

export function ReferentialTableView<TypeReferentialViewModel>({
  columns,
  data = [],
}: ReferentialTableViewProps<TypeReferentialViewModel>) {
  return <Table columns={columns} data={data}></Table>;
}
