import { FetchResult } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { customersNavigationHelper } from "../../helpers/customers-navigation.helper";
import { RemoveCustomerMutation } from "../../operations/customers.generated";
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
  const navigate = useNavigate();

  const handleRemove = async () => {
    await onRemove(defaultValues.id)
      .then((result) => {
        toast.success(
          `${result?.data?.removeCustomer?.naming} a été supprimé(e) avec succès.`
        );
        navigate(customersNavigationHelper.root());
      })
      .catch((err) => console.error(err));
  };

  return (
    <ManageCustomerView
      defaultValues={defaultValues}
      onRemove={handleRemove}
    ></ManageCustomerView>
  );
};
