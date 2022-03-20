import { SetStateAction } from "react";
import { AddAndSearchStack } from "../../components/AddAndSearchStack";
import { ProductsTable, ProductsTableProps } from "./components/ProductsTable";

export type ManageProductsViewProps = Pick<
  ProductsTableProps,
  "data" | "onRemove"
> & {
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageProductsView = ({
  data = [],
  onRemove,
  onSearch,
}: ManageProductsViewProps) => {
  return (
    <>
      <AddAndSearchStack
        onSearch={onSearch}
        label="Ajouter un nouveau produit"
        to="/backoffice/products/create"
      ></AddAndSearchStack>

      <ProductsTable data={data} onRemove={onRemove}></ProductsTable>
    </>
  );
};
