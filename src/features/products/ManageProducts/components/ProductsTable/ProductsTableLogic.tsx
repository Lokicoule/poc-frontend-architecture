import { Link } from "react-router-dom";
import { ColumnProps } from "../../../../../components/Tables";
import { ProductViewModel } from "../../../../../viewModels/products";
import { ProductsTableView, ProductsTableViewProps } from "./ProductsTableView";

export type ProductsTableLogicProps = Pick<
  ProductsTableViewProps,
  "data" | "onRemove"
>;

export const ProductsTableLogic = ({
  data = [],
  onRemove,
}: ProductsTableLogicProps) => {
  const columns: ColumnProps[] = [
    {
      label: "Code produit",
      key: "code",
      sortable: true,
      content: (item: ProductViewModel) => (
        <Link to={`/backoffice/products/view/${item.id}`}>{item.code}</Link>
      ),
    },
    {
      label: "Label",
      path: "label",
      key: "label",
      sortable: true,
    },
  ];

  return (
    <ProductsTableView
      columns={columns}
      data={data}
      onRemove={onRemove}
    ></ProductsTableView>
  );
};
