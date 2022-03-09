import { FetchResult } from "@apollo/client";
import { RemoveCustomerMutation } from "../../../api/hooks/customers.generated";
import {
  ManageCustomerView,
  ManageCustomerViewProps,
} from "./ManageCustomerView";

type ManageCustomerLogicProps = Pick<
  ManageCustomerViewProps,
  "defaultValues" | "onRemove"
> & {};

export const ManageCustomerLogic = ({
  defaultValues,
  onRemove,
}: ManageCustomerLogicProps) => {
  return (
    <ManageCustomerView
      defaultValues={defaultValues}
      onRemove={onRemove}
    ></ManageCustomerView>
  );
};
