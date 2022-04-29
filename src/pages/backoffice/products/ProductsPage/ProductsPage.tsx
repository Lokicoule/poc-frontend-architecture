import { Page } from "../../../../components/Page";
import { ManageProducts } from "../../../../modules/products/useCases/ManageProducts";

export const ProductsPage = () => {
  return (
    <Page title="Products">
      <ManageProducts></ManageProducts>
    </Page>
  );
};
