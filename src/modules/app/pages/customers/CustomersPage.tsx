import { Page } from "../../../../components/Page";
import { ManageCustomers } from "../../../../modules/customers/useCases/ManageCustomers";

export const CustomersPage = () => {
  return (
    <Page title="Customers">
      <ManageCustomers></ManageCustomers>
    </Page>
  );
};
