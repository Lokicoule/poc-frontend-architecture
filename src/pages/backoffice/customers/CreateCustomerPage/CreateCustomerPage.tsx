import { Page } from "../../../../components/Page/Page";
import { CreateCustomer } from "../../../../modules/customers/useCases/CreateCustomer";

export const CreateCustomerPage = () => {
  return (
    <Page title="CreateCustomer">
      <CreateCustomer></CreateCustomer>
    </Page>
  );
};
