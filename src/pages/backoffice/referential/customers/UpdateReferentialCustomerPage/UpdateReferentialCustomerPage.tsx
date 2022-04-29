import { useParams } from "react-router-dom";
import { Page } from "../../../../../components/Page/Page";
import { UpdateReferentialCustomer } from "../../../../../modules/customers/useCases/UpdateReferentialCustomer";

export const UpdateReferentialCustomerPage = () => {
  const { referentialCustomerId } = useParams();

  return (
    <Page title="UpdateReferentialCustomer">
      <UpdateReferentialCustomer
        referentialCustomerId={referentialCustomerId ?? ""}
      ></UpdateReferentialCustomer>
    </Page>
  );
};
