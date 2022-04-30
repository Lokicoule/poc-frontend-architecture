import { Loader } from "../../../../components/Loader";
import { UpdateCustomerViewModel } from "../../../../viewModels/customers";
import { CustomerViewModel } from "../../domain/customers.model";
import { useGetCustomerFacade } from "../../hooks/useGetCustomerFacade";
import { useUpdateCustomerFacade } from "../../hooks/useUpdateCustomerFacade";
import { UpdateCustomerLogic } from "./UpdateCustomerLogic";

type UpdateCustomerControllerProps = {
  customerId: string;
};

export const UpdateCustomerController = ({
  customerId,
}: UpdateCustomerControllerProps) => {
  const { customer, loading } = useGetCustomerFacade(customerId);
  const { updateCustomer, error } = useUpdateCustomerFacade();

  const handleSubmit = (
    defaultCustomer: CustomerViewModel,
    updatedCustomer: UpdateCustomerViewModel
  ) => updateCustomer(customerId, defaultCustomer, updatedCustomer);

  if (loading) return <Loader></Loader>;
  return (
    <UpdateCustomerLogic
      defaultValues={customer}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></UpdateCustomerLogic>
  );
};
