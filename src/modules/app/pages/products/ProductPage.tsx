import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { ManageProduct } from "../../../../modules/products/useCases/ManageProduct";
import { paramsRoutesConfig } from "../../routes/configs/routes.config";

export const ProductPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];
  return (
    <Page title="Product">
      <ManageProduct productId={id} />
    </Page>
  );
};
