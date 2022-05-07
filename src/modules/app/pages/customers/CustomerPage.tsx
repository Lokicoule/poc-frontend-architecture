import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { ManageCustomer } from "../../../../modules/customers/useCases/ManageCustomer";
import { paramsRoutesConfig } from "../../routes/configs/routes.config";

export const CustomerPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];
  return (
    <Page title="Customer">
      <ManageCustomer customerId={id} />
    </Page>
  );
};
