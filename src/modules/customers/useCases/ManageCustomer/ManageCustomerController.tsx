import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../components/Loader";
import { useGetCustomerFacade } from "../../hooks/useGetCustomerFacade";
import { useRemoveCustomerFacade } from "../../hooks/useRemoveCustomerFacade";
import { ManageCustomerLogic } from "./ManageCustomerLogic";

type ManageCustomerControllerProps = {
  customerId: string | undefined;
};

export const ManageCustomerController = ({
  customerId = "",
}: ManageCustomerControllerProps) => {
  const navigate = useNavigate();
  const { customer, loading, error } = useGetCustomerFacade(customerId);
  const { removeCustomer } = useRemoveCustomerFacade();

  const handleRemove = (id: string) => removeCustomer(id);

  if (loading) return <Loader></Loader>;
  if (error) navigate("/backoffice/customers");
  return (
    <ManageCustomerLogic
      defaultValues={customer}
      onRemove={handleRemove}
    ></ManageCustomerLogic>
  );
};
