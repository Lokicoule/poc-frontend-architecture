import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../components/Loader";
import { customersNavigationHelper } from "../../helpers/customers-navigation.helper";
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
  const { getCustomer } = useGetCustomerFacade(customerId);
  const { removeCustomer } = useRemoveCustomerFacade();

  const handleRemove = (id: string) => removeCustomer.onRemove(id);

  if (getCustomer.loading) return <Loader></Loader>;
  if (getCustomer.error) navigate(customersNavigationHelper.root());
  return (
    <ManageCustomerLogic
      defaultValues={getCustomer.data}
      onRemove={handleRemove}
    ></ManageCustomerLogic>
  );
};
