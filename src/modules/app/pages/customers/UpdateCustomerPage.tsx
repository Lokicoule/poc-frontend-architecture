import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { CreateCustomer } from "../../../customers/useCases/CreateCustomer";
import { UpdateCustomer } from "../../../customers/useCases/UpdateCustomer";
import { paramsRoutesConfig } from "../../routes/configs/routes.config";

export const UpdateCustomerPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];

  const upsertComponent = id ? (
    <UpdateCustomer customerId={id}></UpdateCustomer>
  ) : (
    <CreateCustomer></CreateCustomer>
  );

  return <Page title="UpdateCustomer">{upsertComponent}</Page>;
};
