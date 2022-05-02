import { Loader } from "../../../../components/Loader/Loader";
import { useGetReferentialOrderListFacade } from "../../hooks/useGetReferentialOrderListFacade";
import { ManageReferentialOrderLogic } from "./ManageReferentialOrderLogic";

export const ManageReferentialOrderController = () => {
  const { getReferentialOrderList } = useGetReferentialOrderListFacade();

  if (getReferentialOrderList.loading) return <Loader></Loader>;
  return (
    <ManageReferentialOrderLogic
      referentialOrderList={getReferentialOrderList.data}
    ></ManageReferentialOrderLogic>
  );
};
