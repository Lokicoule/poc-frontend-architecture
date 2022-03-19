import { ColumnProps } from "../../../../../components/Tables";
import {
  ReferentialParamsTableView,
  ReferentialParamsTableViewProps,
} from "./ReferentialParamsTableView";

export type ReferentialParamsTableLogicProps = Pick<
  ReferentialParamsTableViewProps,
  "data"
>;

export const ReferentialParamsTableLogic = ({
  data = [],
}: ReferentialParamsTableLogicProps) => {
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
    <ReferentialParamsTableView
      columns={columns}
      data={data}
    ></ReferentialParamsTableView>
  );
};
