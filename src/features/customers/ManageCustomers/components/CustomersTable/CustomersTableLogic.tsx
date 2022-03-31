import { Link } from "react-router-dom";
import { ColumnProps } from "../../../../../components/Tables";
import { CustomerViewModel } from "../../../../../viewModels/customers";
import {
  CustomersTableView,
  CustomersTableViewProps,
} from "./CustomersTableView";

export type CustomersTableLogicProps = Pick<
  CustomersTableViewProps,
  "data" | "onRemove"
>;

export const CustomersTableLogic = ({
  data = [],
  onRemove,
}: CustomersTableLogicProps) => {
  const columns: ColumnProps[] = [
    {
      label: "Code client",
      key: "code",
      sortable: true,
      content: (item: CustomerViewModel) => (
        <Link to={`/backoffice/customers/view/${item.id}`}>{item.code}</Link>
      ),
    },
    {
      label: "Nom",
      path: "naming",
      key: "naming",
      sortable: true,
    },
    {
      label: "Adresse",
      path: "address",
      key: "address",
      sortable: true,
    },
    {
      label: "Code postal",
      path: "zipCode",
      key: "zipCode",
      sortable: true,
    },
  ];

  return (
    <CustomersTableView
      columns={columns}
      data={data}
      onRemove={onRemove}
    ></CustomersTableView>
  );
};
