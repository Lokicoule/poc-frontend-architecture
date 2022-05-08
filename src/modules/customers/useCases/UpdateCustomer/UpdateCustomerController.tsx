import { Loader } from "../../../../components/Loader";
import { UpdateCustomerViewModelProps } from "../../domain/customers.model";
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

  const handleSubmit = (updatedCustomer: UpdateCustomerViewModelProps) =>
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
