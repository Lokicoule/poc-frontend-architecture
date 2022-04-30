import { Loader } from "../../../../components/Loader";
import { UpdateCustomerViewModel } from "../../../../viewModels/customers";
import { useGetCustomerFacade } from "../../hooks/useGetCustomerFacade";
import { useUpdateCustomerFacade } from "../../hooks/useUpdateCustomerFacade";
import { UpdateCustomerLogic } from "./UpdateCustomerLogic";

type UpdateCustomerControllerProps = {
  customerId: string;
};

export const UpdateCustomerController = ({
  customerId,
}: UpdateCustomerControllerProps) => {
  const { getCustomer } = useGetCustomerFacade(customerId);
  const { updateCustomer } = useUpdateCustomerFacade();

  const handleSubmit = (updatedCustomer: UpdateCustomerViewModel) =>
    updateCustomer.onUpdate(customerId, updatedCustomer);

  if (getCustomer.loading) return <Loader></Loader>;
  return (
    <UpdateCustomerLogic
      defaultValues={getCustomer.data}
      onSubmit={handleSubmit}
      errors={updateCustomer.error?.graphQLErrors}
    ></UpdateCustomerLogic>
  );
};
