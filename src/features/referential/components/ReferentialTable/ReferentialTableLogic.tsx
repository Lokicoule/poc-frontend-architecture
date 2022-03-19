import { Link } from "react-router-dom";
import { ColumnProps } from "../../../../components/Tables";
import { ReferentialViewModel } from "../../../../view-models/referential";
import { ReferentialParamsTable } from "./ReferentiaParametersTable";
import {
  ReferentialTableView,
  ReferentialTableViewProps,
} from "./ReferentialTableView";

export type ReferentialTableLogicProps = Pick<
  ReferentialTableViewProps,
  "data"
> & {
  path: string;
};

export const ReferentialTableLogic = ({
  data = [],
  path,
}: ReferentialTableLogicProps) => {
  const columns: ColumnProps[] = [
    {
      label: "Cas d'usage",
      key: "useCase",
      content: (item: ReferentialViewModel) => (
        <Link to={`/backoffice/referential/${path}/update/${item.id}`}>
          {item.useCase}
        </Link>
      ),
    },
    {
      label: "Paramètres",
      key: "parameters",
      content: (item: ReferentialViewModel) => {
        return (
          <ReferentialParamsTable
            data={item.parameters}
          ></ReferentialParamsTable>
        );
      },
    },
  ];

  return (
    <ReferentialTableView columns={columns} data={data}></ReferentialTableView>
  );
};
