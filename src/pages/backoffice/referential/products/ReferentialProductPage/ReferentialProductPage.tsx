import { Page } from "../../../../../components/Page";
import { ManageReferentialProduct } from "../../../../../modules/products/useCases/ManageReferentialProduct";

export const ReferentialProductPage = () => {
  return (
    <Page title="Product Referential">
      <ManageReferentialProduct></ManageReferentialProduct>
    </Page>
  );
};
