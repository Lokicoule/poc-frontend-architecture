import { ColumnProps, Table } from "../../../../../components/Tables";

export type ReferentialParamsTableViewProps<TypeParameterReferentialProps> = {
  columns: ColumnProps[];
  data: TypeParameterReferentialProps[];
};

export const ReferentialParamsTableView = <TypeParameterReferentialProps,>({
  columns,
  data = [],
}: ReferentialParamsTableViewProps<TypeParameterReferentialProps>) => {
  return <Table columns={columns} data={data}></Table>;
};
