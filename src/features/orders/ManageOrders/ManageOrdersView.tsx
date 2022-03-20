import { SetStateAction } from "react";
import { AddAndSearchStack } from "../../components/AddAndSearchStack";
import { OrdersTable, OrdersTableProps } from "./components/OrdersTable";

export type ManageOrdersViewProps = Pick<
  OrdersTableProps,
  "data" | "onRemove"
> & {
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageOrdersView = ({
  data = [],
  onRemove,
  onSearch,
}: ManageOrdersViewProps) => {
  return (
    <>
      <AddAndSearchStack
        onSearch={onSearch}
        label="Ajouter une nouvelle commande"
        to="/backoffice/orders/create"
      ></AddAndSearchStack>

      <OrdersTable data={data} onRemove={onRemove}></OrdersTable>
    </>
  );
};
