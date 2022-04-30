import { Loader } from "../../../../components/Loader/Loader";
import { useGetAllReferentialCustomerFacade } from "../../hooks/useGetAllReferentialCustomerFacade";
import { ManageReferentialCustomerLogic } from "./ManageReferentialCustomerLogic";

export const ManageReferentialCustomerController = () => {
  const { getAllReferentialCustomer } = useGetAllReferentialCustomerFacade();

  if (getAllReferentialCustomer.loading) return <Loader></Loader>;
  return (
    <ManageReferentialCustomerLogic
      referentialCustomerList={getAllReferentialCustomer.data}
    ></ManageReferentialCustomerLogic>
  );
};
