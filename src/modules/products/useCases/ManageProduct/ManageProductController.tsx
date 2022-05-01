import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../components/Loader";
import { useGetProductFacade } from "../../hooks/useGetProductFacade";
import { useRemoveProductFacade } from "../../hooks/useRemoveProductFacade";
import { ManageProductLogic } from "./ManageProductLogic";

type ManageProductControllerProps = {
  productId: string | undefined;
};

export const ManageProductController = ({
  productId = "",
}: ManageProductControllerProps) => {
  const navigate = useNavigate();
  const { getProduct } = useGetProductFacade(productId);
  const { removeProduct } = useRemoveProductFacade();

  const handleRemove = (id: string) => removeProduct.onRemove(id);

  if (getProduct.loading) return <Loader></Loader>;
  if (getProduct.error) navigate("/backoffice/customers");

  return (
    <ManageProductLogic
      defaultValues={getProduct.data}
      onRemove={handleRemove}
    ></ManageProductLogic>
  );
};
