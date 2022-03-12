import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { ManageProduct } from "../../../../features/products/ManageProduct";

export const ProductPage = () => {
  const { productId } = useParams();

  return (
    <Page title="Product">
      <ManageProduct productId={productId} />
    </Page>
  );
};
