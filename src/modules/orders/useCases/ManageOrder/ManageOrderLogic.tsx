import { FetchResult } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ordersNavigationHelper } from "../../helpers/orders-navigation.helper";
import { RemoveOrderMutation } from "../../operations/orders.generated";
import { ManageOrderView, ManageOrderViewProps } from "./ManageOrderView";

type ManageOrderLogicProps = Pick<ManageOrderViewProps, "defaultValues"> & {
  onRemove: (
    id: string
  ) => Promise<
    FetchResult<RemoveOrderMutation, Record<string, any>, Record<string, any>>
  >;
};

export const ManageOrderLogic = ({
  defaultValues,
  onRemove,
}: ManageOrderLogicProps) => {
  const navigate = useNavigate();

  const handleRemove = async () => {
    await onRemove(defaultValues.id)
      .then((result) => {
        toast.success(
          `${result?.data?.removeOrder?.code} a été supprimé(e) avec succès.`
        );
        navigate(ordersNavigationHelper.root());
      })
      .catch((err) => console.error(err));
  };

  return (
    <ManageOrderView
      defaultValues={defaultValues}
      onRemove={handleRemove}
    ></ManageOrderView>
  );
};
