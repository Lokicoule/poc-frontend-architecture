import { useParams } from "react-router-dom";
import { Page } from "../../../components/Page/Page";
import { CreateCustomer } from "../../../features/customers/CreateCustomer";
import { UpdateCustomer } from "../../../features/customers/UpdateCustomer";

export const UpdateCustomerPage = () => {
  const { customerId } = useParams();

  const upsertComponent = customerId ? (
    <UpdateCustomer customerId={customerId}></UpdateCustomer>
  ) : (
    <CreateCustomer></CreateCustomer>
  );

  return <Page title="Customer">{upsertComponent}</Page>;
};
