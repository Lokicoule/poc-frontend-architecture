import { FetchResult } from "@apollo/client";
import { RemoveCustomerMutation } from "../../../api/hooks/customers.generated";
import {
  ManageCustomerView,
  ManageCustomerViewProps,
} from "./ManageCustomerView";

type ManageCustomerLogicProps = Pick<
  ManageCustomerViewProps,
  "defaultValues"
> & {
  onRemove: (
    id: string
  ) => Promise<
    FetchResult<
      RemoveCustomerMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

export const ManageCustomerLogic = ({
  defaultValues,
  onRemove,
}: ManageCustomerLogicProps) => {
  const handleRemove = async () => {
    await onRemove(defaultValues.id).catch((err) => console.error(err));
  };

  return (
    <ManageCustomerView
      defaultValues={defaultValues}
      onRemove={handleRemove}
    ></ManageCustomerView>
  );
};
