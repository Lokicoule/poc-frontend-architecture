import { ColumnProps } from "../../../../../../components/Tables";
import {
  ReferentialCustomersParamsTableView,
  ReferentialCustomersParamsTableViewProps,
} from "./ReferentialCustomersParamsTableView";

export type ReferentialCustomersParamsTableLogicProps = Pick<
  ReferentialCustomersParamsTableViewProps,
  "data"
>;

export const ReferentialCustomersParamsTableLogic = ({
  data = [],
}: ReferentialCustomersParamsTableLogicProps) => {
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
    <ReferentialCustomersParamsTableView
      columns={columns}
      data={data}
    ></ReferentialCustomersParamsTableView>
  );
};
