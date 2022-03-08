import { Page } from "../../../components/Page";
import { ManageCustomers } from "../../../features/customers/ManageCustomers";

export const CustomersPage = () => {
  return (
    <Page title="Customers">
      <ManageCustomers></ManageCustomers>
    </Page>
  );
};
