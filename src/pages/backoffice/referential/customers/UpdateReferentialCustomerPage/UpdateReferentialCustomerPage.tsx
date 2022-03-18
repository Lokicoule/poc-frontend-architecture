import { useParams } from "react-router-dom";
import { Page } from "../../../../../components/Page/Page";
import { UpdateReferentialCustomer } from "../../../../../features/referential/customers";

export const UpdateReferentialCustomerPage = () => {
  const { referentialCustomerId } = useParams();

  return (
    <Page title="UpdateCustomer">
      <UpdateReferentialCustomer
        customerId={referentialCustomerId || ""}
      ></UpdateReferentialCustomer>
    </Page>
  );
};
