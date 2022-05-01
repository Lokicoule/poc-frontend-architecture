import { Loader } from "../../../../components/Loader/Loader";
import { useGetReferentialProductListFacade } from "../../hooks/useGetReferentialProductListFacade";
import { ManageReferentialProductLogic } from "./ManageReferentialProductLogic";

export const ManageReferentialProductController = () => {
  const { getReferentialProductList } = useGetReferentialProductListFacade();

  if (getReferentialProductList.loading) return <Loader></Loader>;
  return (
    <ManageReferentialProductLogic
      referentialProductList={getReferentialProductList.data}
    ></ManageReferentialProductLogic>
  );
};
