import { Loader } from "../../../../components/Loader/Loader";
import { useGetAllReferentialCustomerFacade } from "../../hooks/useGetAllReferentialCustomerFacade";
import { ManageReferentialCustomerLogic } from "./ManageReferentialCustomerLogic";

export const ManageReferentialCustomerController = () => {
  const { referentialCustomerList, loading } =
    useGetAllReferentialCustomerFacade();

  if (loading) return <Loader></Loader>;
  return (
    <ManageReferentialCustomerLogic
      referentialCustomerList={referentialCustomerList}
    ></ManageReferentialCustomerLogic>
  );
};
