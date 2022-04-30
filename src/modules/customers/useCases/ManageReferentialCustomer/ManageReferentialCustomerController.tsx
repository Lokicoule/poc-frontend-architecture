import { Loader } from "../../../../components/Loader/Loader";
import { useGetReferentialCustomerListFacade } from "../../hooks/useGetReferentialCustomerListFacade";
import { ManageReferentialCustomerLogic } from "./ManageReferentialCustomerLogic";

export const ManageReferentialCustomerController = () => {
  const { getReferentialCustomerList } = useGetReferentialCustomerListFacade();

  if (getReferentialCustomerList.loading) return <Loader></Loader>;
  return (
    <ManageReferentialCustomerLogic
      referentialCustomerList={getReferentialCustomerList.data}
    ></ManageReferentialCustomerLogic>
  );
};
