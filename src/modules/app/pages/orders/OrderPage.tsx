import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { ManageOrder } from "../../../../modules/orders/useCases/ManageOrder";
import { paramsRoutesConfig } from "../../routes/configs/routes.config";

export const OrderPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];

  return (
    <Page title="Order">
      <ManageOrder orderId={id} />
    </Page>
  );
};
