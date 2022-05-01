import { Loader } from "../../../../components/Loader";
import { useGetProductListFacade } from "../../hooks/useGetProductListFacade";
import { useRemoveProductListFacade } from "../../hooks/useRemoveProductListFacade";
import { ManageProductsLogic } from "./ManageProductsLogic";

export const ManageProductsController = () => {
  const { getProductList } = useGetProductListFacade();
  const { removeProductList } = useRemoveProductListFacade();

  const handleRemove = (ids: string[]) => {
    return removeProductList.onRemove(ids);
  };

  if (getProductList.loading) return <Loader></Loader>;
  return (
    <ManageProductsLogic
      data={getProductList.data}
      onRemove={handleRemove}
    ></ManageProductsLogic>
  );
};
