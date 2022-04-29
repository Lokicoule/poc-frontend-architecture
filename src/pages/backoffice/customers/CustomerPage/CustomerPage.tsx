import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { ManageCustomer } from "../../../../modules/customers/useCases/ManageCustomer";

export const CustomerPage = () => {
  const { customerId } = useParams();

  return (
    <Page title="Customer">
      <ManageCustomer customerId={customerId} />
    </Page>
  );
};
