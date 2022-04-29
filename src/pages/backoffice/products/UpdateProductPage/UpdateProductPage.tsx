import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { CreateProduct } from "../../../../modules/products/useCases/CreateProduct";
import { UpdateProduct } from "../../../../modules/products/useCases/UpdateProduct";

export const UpdateProductPage = () => {
  const { productId } = useParams();

  const upsertComponent = productId ? (
    <UpdateProduct productId={productId}></UpdateProduct>
  ) : (
    <CreateProduct></CreateProduct>
  );

  return <Page title="UpdateProduct">{upsertComponent}</Page>;
};
