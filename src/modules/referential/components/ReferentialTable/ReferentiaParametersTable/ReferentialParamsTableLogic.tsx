import { ColumnProps } from "../../../../../components/Tables";
import {
  ReferentialParamsTableView,
  ReferentialParamsTableViewProps,
} from "./ReferentialParamsTableView";

export type ReferentialParamsTableLogicProps<TypeParameterReferentialProps> =
  Pick<ReferentialParamsTableViewProps<TypeParameterReferentialProps>, "data">;

export const ReferentialParamsTableLogic = <TypeParameterReferentialProps,>({
  data = [],
}: ReferentialParamsTableLogicProps<TypeParameterReferentialProps>) => {
  const columns: ColumnProps[] = [
    {
      label: "Clé",
      key: "key",
      path: "key",
    },
    {
      label: "Valeur",
      key: "value",
      path: "value",
    },
  ];

  return (
    <ReferentialParamsTableView<TypeParameterReferentialProps>
      columns={columns}
      data={data}
    ></ReferentialParamsTableView>
  );
};
