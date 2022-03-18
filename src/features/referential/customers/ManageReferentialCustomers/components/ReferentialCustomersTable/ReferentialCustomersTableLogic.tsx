import { Link } from "react-router-dom";
import { ColumnProps } from "../../../../../../components/Tables";
import { ReferentialCustomerViewModel } from "../../../../../../view-models/referential/customers/ReferentialCustomerViewModel";
import { ReferentialCustomersParamsTable } from "../ReferentialCustomersParametersTable";
import {
  ReferentialCustomersTableView,
  ReferentialCustomersTableViewProps,
} from "./ReferentialCustomersTableView";

export type ReferentialCustomersTableLogicProps = Pick<
  ReferentialCustomersTableViewProps,
  "data"
>;

export const ReferentialCustomersTableLogic = ({
  data = [],
}: ReferentialCustomersTableLogicProps) => {
  const columns: ColumnProps[] = [
    {
      label: "Cas d'usage",
      key: "useCase",
      content: (item: ReferentialCustomerViewModel) => (
        <Link to={`/backoffice/referential/customers/update/${item.id}`}>
          {item.useCase}
        </Link>
      ),
    },
    {
      label: "Paramètres",
      key: "parameters",
      content: (item: ReferentialCustomerViewModel) => {
        return (
          <ReferentialCustomersParamsTable
            data={item.parameters}
          ></ReferentialCustomersParamsTable>
        );
      },
    },
  ];

  return (
    <ReferentialCustomersTableView
      columns={columns}
      data={data}
    ></ReferentialCustomersTableView>
  );
};
