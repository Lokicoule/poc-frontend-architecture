import { Page } from "../../../components/Page/Page";
import { CreateCustomerController } from "../../../features/customers/CreateCustomer/CreateCustomerController";

export const CustomerPage = () => {
  //const { customerId } = useParams();

  return (
    <Page title="Customer">
      <CreateCustomerController></CreateCustomerController>
    </Page>
  );
};
