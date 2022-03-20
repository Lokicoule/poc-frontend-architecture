import { SetStateAction } from "react";
import { AddAndSearchStack } from "../../components/AddAndSearchStack";
import {
  CustomersTable,
  CustomersTableProps,
} from "./components/CustomersTable";

export type ManageCustomersViewProps = Pick<
  CustomersTableProps,
  "data" | "onRemove"
> & {
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageCustomersView = ({
  data = [],
  onRemove,
  onSearch,
}: ManageCustomersViewProps) => {
  return (
    <>
      <AddAndSearchStack
        onSearch={onSearch}
        label="Ajouter un nouveau client"
        to="/backoffice/customers/create"
      ></AddAndSearchStack>

      <CustomersTable data={data} onRemove={onRemove}></CustomersTable>
    </>
  );
};
