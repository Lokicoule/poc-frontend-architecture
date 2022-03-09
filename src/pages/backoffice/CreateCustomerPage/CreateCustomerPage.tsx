import { Page } from "../../../components/Page/Page";
import { CreateCustomer } from "../../../features/customers/CreateCustomer";

export const CreateCustomerPage = () => {
  return (
    <Page title="Customer">
      <CreateCustomer></CreateCustomer>
    </Page>
  );
};
