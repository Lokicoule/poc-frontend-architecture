import { Loader } from "../../../../components/Loader";
import { useGetCustomersFacade } from "../../hooks/useGetCustomersFacade";
import { useRemoveManyCustomersFacade } from "../../hooks/useRemoveManyCustomersFacade";
import { ManageCustomersLogic } from "./ManageCustomersLogic";

export const ManageCustomersController = () => {
  const { customers, loading } = useGetCustomersFacade();
  const { removeManyCustomers } = useRemoveManyCustomersFacade();

  const handleRemove = (ids: string[]) => {
    return removeManyCustomers(ids);
  };

  if (loading) return <Loader></Loader>;
  return (
    <ManageCustomersLogic
      data={customers}
      onRemove={handleRemove}
    ></ManageCustomersLogic>
  );
};
