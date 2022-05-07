import { useParams } from "react-router-dom";
import { Page } from "../../../../../components/Page/Page";
import { UpdateReferentialCustomer } from "../../../../../modules/customers/useCases/UpdateReferentialCustomer";
import { paramsRoutesConfig } from "../../../routes/configs/routes.config";

export const UpdateReferentialCustomerPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];
  if (!id) return <div>Referentiel client n'existe pas</div>;
  return (
    <Page title="UpdateReferentialCustomer">
      <UpdateReferentialCustomer
        referentialCustomerId={id}
      ></UpdateReferentialCustomer>
    </Page>
  );
};
