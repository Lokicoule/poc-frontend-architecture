import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { CreateProduct } from "../../../products/useCases/CreateProduct";
import { UpdateProduct } from "../../../products/useCases/UpdateProduct";
import { paramsRoutesConfig } from "../../routes/configs/routes.config";

export const UpdateProductPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];
  const upsertComponent = id ? (
    <UpdateProduct productId={id}></UpdateProduct>
  ) : (
    <CreateProduct></CreateProduct>
  );

  return <Page title="UpdateProduct">{upsertComponent}</Page>;
};
