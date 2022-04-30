import { Loader } from "../../../../components/Loader";
import { useGetCustomersFacade } from "../../hooks/useGetCustomersFacade";
import { useRemoveManyCustomersFacade } from "../../hooks/useRemoveManyCustomersFacade";
import { ManageCustomersLogic } from "./ManageCustomersLogic";

export const ManageCustomersController = () => {
  const { getCustomers } = useGetCustomersFacade();
  const { removeManyCustomers } = useRemoveManyCustomersFacade();

  const handleRemove = (ids: string[]) => {
    return removeManyCustomers.onRemove(ids);
  };

  if (getCustomers.loading) return <Loader></Loader>;
  return (
    <ManageCustomersLogic
      data={getCustomers.data}
      onRemove={handleRemove}
    ></ManageCustomersLogic>
  );
};
