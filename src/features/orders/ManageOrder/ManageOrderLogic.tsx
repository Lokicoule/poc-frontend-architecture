import { FetchResult } from "@apollo/client";
import { RemoveOrderMutation } from "../../../api/fdo/operations/orders.generated";
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
  const handleRemove = async () => {
    await onRemove(defaultValues.id).catch((err) => console.error(err));
  };

  return (
    <ManageOrderView
      defaultValues={defaultValues}
      onRemove={handleRemove}
    ></ManageOrderView>
  );
};
