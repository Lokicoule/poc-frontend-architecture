import { FetchResult } from "@apollo/client";
import { RemoveCustomersMutation } from "../../../api/hooks/customers.generated";
import { ManageCustomersView, Props as ViewProps } from "./ManageCustomersView";

interface Props extends Pick<ViewProps, "data"> {
  onRemove: (
    ids: string[]
  ) => Promise<
    FetchResult<
      RemoveCustomersMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
}

export const ManageCustomersLogic = ({ data, onRemove }: Props) => {
  const handleRemove = async (ids: string[]) => {
    await onRemove(ids).catch((err) => console.error(err));
  };

  return (
    <ManageCustomersView
      data={data}
      onRemove={handleRemove}
    ></ManageCustomersView>
  );
};
