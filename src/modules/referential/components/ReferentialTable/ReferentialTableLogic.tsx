import { Link } from "react-router-dom";
import { ColumnProps } from "../../../../components/Tables";
import { ParamReferentialViewModelProps } from "../../domain/parameter-referential.model";
import { ReferentialViewModel } from "../../domain/referential.model";
import {
  ReferentialTableView,
  ReferentialTableViewProps,
} from "./ReferentialTableView";
import { ReferentialParamsTable } from "./ReferentiaParametersTable";

export type ReferentialTableLogicProps<T> = Pick<
  ReferentialTableViewProps<T>,
  "data"
> & {
  path: string;
};

export const ReferentialTableLogic = <
  TypeUseCaseReferentialEnum,
  TypeParameterReferentialEnum,
  TypeParameterReferentialProps extends ParamReferentialViewModelProps<TypeParameterReferentialEnum>,
  TypeReferentialViewModel extends ReferentialViewModel<
    TypeUseCaseReferentialEnum,
    TypeParameterReferentialProps
  >
>({
  data,
  path,
}: ReferentialTableLogicProps<TypeReferentialViewModel>) => {
  const columns: ColumnProps[] = [
    {
      label: "Cas d'usage",
      key: "useCase",
      content: (item: TypeReferentialViewModel) => (
        <Link to={`/backoffice/referential/${path}/update/${item.id}`}>
          {item.useCase}
        </Link>
      ),
    },
    {
      label: "Paramètres",
      key: "parameters",
      content: (item: TypeReferentialViewModel) => {
        return (
          <ReferentialParamsTable<TypeParameterReferentialProps>
            data={item.parameters}
          ></ReferentialParamsTable>
        );
      },
    },
  ];

  return (
    <ReferentialTableView<TypeReferentialViewModel>
      columns={columns}
      data={data}
    ></ReferentialTableView>
  );
};
