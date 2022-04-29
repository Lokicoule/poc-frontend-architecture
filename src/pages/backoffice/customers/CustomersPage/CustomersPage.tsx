import { Page } from "../../../../components/Page";
import { ProtectedPage } from "../../../../components/Page/ProtectedPage";
import { ManageCustomers } from "../../../../modules/customers/useCases/ManageCustomers";

export const CustomersPage = () => {
  return (
    <ProtectedPage title="Customers">
      <ManageCustomers></ManageCustomers>
    </ProtectedPage>
  );
};
