import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { ManageCustomer } from "../../../customers/useCases/ManageCustomer";
import { paramsRoutesConfig } from "../../routes/configs/routes.config";

export const OrderCustomerPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];
  return (
    <Page title="Order customer">
      <ManageCustomer customerId={id} />
    </Page>
  );
};
