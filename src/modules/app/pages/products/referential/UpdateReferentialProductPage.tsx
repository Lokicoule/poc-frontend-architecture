import { useParams } from "react-router-dom";
import { Page } from "../../../../../components/Page";
import { UpdateReferentialProduct } from "../../../../products/useCases/UpdateReferentialProduct";
import { paramsRoutesConfig } from "../../../routes/configs/routes.config";

export const UpdateReferentialProductPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];

  if (!id) return <div>Parametrage produit non trouvé</div>;
  return (
    <Page title="UpdateProduct">
      <UpdateReferentialProduct
        referentialProductId={id}
      ></UpdateReferentialProduct>
    </Page>
  );
};
