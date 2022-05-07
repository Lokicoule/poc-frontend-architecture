import { useParams } from "react-router-dom";
import { Page } from "../../../../../components/Page";
import { UpdateReferentialOrder } from "../../../../orders/useCases/UpdateReferentialOrder";
import { paramsRoutesConfig } from "../../../routes/configs/routes.config";

export const UpdateReferentialOrderPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];

  if (!id) return <div>Parametrage commande non trouvé</div>;

  return (
    <Page title="UpdateOrder">
      <UpdateReferentialOrder referentialOrderId={id}></UpdateReferentialOrder>
    </Page>
  );
};
