import { Loader } from "../../../../components/Loader/Loader";
import { useGetReferentialCustomersFacade } from "../../hooks/useGetReferentialCustomersFacade";
import { ManageReferentialCustomerLogic } from "./ManageReferentialCustomerLogic";

export const ManageReferentialCustomerController = () => {
  const { referentialCustomerList, loading } =
    useGetReferentialCustomersFacade();

  if (loading) return <Loader></Loader>;
  return (
    <ManageReferentialCustomerLogic
      referentialCustomerList={referentialCustomerList}
    ></ManageReferentialCustomerLogic>
  );
};
