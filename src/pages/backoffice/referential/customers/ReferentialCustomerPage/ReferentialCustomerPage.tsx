import { Page } from "../../../../../components/Page";
import { ManageReferentialCustomer } from "../../../../../modules/customers/useCases/ManageReferentialCustomer";

export const ReferentialCustomerPage = () => {
  return (
    <Page title="Customer Referential">
      <ManageReferentialCustomer></ManageReferentialCustomer>
    </Page>
  );
};
