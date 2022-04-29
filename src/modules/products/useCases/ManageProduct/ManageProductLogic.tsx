import { FetchResult } from "@apollo/client";
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
  const handleRemove = async () => {
    await onRemove(defaultValues.id).catch((err) => console.error(err));
  };

  return (
    <ManageProductView
      defaultValues={defaultValues}
      onRemove={handleRemove}
    ></ManageProductView>
  );
};
