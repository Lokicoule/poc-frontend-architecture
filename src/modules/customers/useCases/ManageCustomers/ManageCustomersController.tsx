import { Loader } from "../../../../components/Loader";
import { useGetCustomerListFacade } from "../../hooks/useGetCustomerListFacade";
import { useRemoveCustomerListFacade } from "../../hooks/useRemoveCustomerListFacade";
import { ManageCustomersLogic } from "./ManageCustomersLogic";

export const ManageCustomersController = () => {
  const { getCustomerList } = useGetCustomerListFacade();
  const { removeCustomerList } = useRemoveCustomerListFacade();

  const handleRemove = (ids: string[]) => {
    return removeCustomerList.onRemove(ids);
  };

  if (getCustomerList.loading) return <Loader></Loader>;
  return (
    <ManageCustomersLogic
      data={getCustomerList.data}
      onRemove={handleRemove}
    ></ManageCustomersLogic>
  );
};
