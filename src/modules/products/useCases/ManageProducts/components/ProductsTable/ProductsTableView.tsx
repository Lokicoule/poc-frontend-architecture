import {
  ColumnProps,
  EnhancedTable,
} from "../../../../../../components/Tables";
import { ProductViewModel } from "../../../../domain/products.model";

export type ProductsTableViewProps = {
  columns: ColumnProps[];
  data: ProductViewModel[];
  onRemove: (ids: string[]) => Promise<void>;
};

export const ProductsTableView = ({
  columns,
  data = [],
  onRemove,
}: ProductsTableViewProps) => {
  return (
    <EnhancedTable
      columns={columns}
      data={data}
      title="Liste produits"
      onRemove={onRemove}
    ></EnhancedTable>
  );
};
