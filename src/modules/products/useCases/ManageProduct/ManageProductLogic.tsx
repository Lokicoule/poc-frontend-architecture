import { FetchResult } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { productsNavigationHelper } from "../../helpers/products-navigation.helper";
import { RemoveProductMutation } from "../../operations/products.generated";
import { ManageProductView, ManageProductViewProps } from "./ManageProductView";

type ManageProductLogicProps = Pick<ManageProductViewProps, "defaultValues"> & {
  onRemove: (
    id: string
  ) => Promise<
    FetchResult<RemoveProductMutation, Record<string, any>, Record<string, any>>
  >;
};

export const ManageProductLogic = ({
  defaultValues,
  onRemove,
}: ManageProductLogicProps) => {
  const navigate = useNavigate();

  const handleRemove = async () => {
    await onRemove(defaultValues.id)
      .then((result) => {
        toast.success(
          `${result?.data?.removeProduct?.label} a été supprimé(e) avec succès.`
        );
        navigate(productsNavigationHelper.root());
      })
      .catch((err) => console.error(err));
  };

  return (
    <ManageProductView
      defaultValues={defaultValues}
      onRemove={handleRemove}
    ></ManageProductView>
  );
};
