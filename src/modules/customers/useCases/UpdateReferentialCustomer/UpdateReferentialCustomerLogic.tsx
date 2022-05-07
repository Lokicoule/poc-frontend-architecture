import { FetchResult } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReferentialCustomerViewModel } from "../../domain/referential-customer.model";
import { customersNavigationHelper } from "../../helpers/customers-navigation.helper";
import { UpdateReferentialCustomerMutation } from "../../operations/referential-customers.generated";
import {
  UpdateReferentialCustomerView,
  UpdateReferentialCustomerViewProps,
} from "./UpdateReferentialCustomerView";

type UpdateReferentialCustomerLogicProps = Pick<
  UpdateReferentialCustomerViewProps,
  "errors"
> & {
  defaultValues: ReferentialCustomerViewModel;
  onSubmit: (
    data: ReferentialCustomerViewModel
  ) => Promise<
    FetchResult<
      UpdateReferentialCustomerMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

export const UpdateReferentialCustomerLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateReferentialCustomerLogicProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (data: ReferentialCustomerViewModel) => {
    if (defaultValues.equals(data)) {
      toast.info("Nothing to save");
      return;
    }
    await onSubmit(data)
      .then((result) => {
        toast.success(
          `${result.data?.updateReferentialCustomer.useCase} a été modifié(e) avec succès.`
        );
        navigate(customersNavigationHelper.rootReferential());
      })
      .catch((error) =>
        toast.error(
          `Le paramètrage du gestionnaire de commande ${defaultValues.useCase} a échoué.`
        )
      );
  };

  return (
    <UpdateReferentialCustomerView
      onSubmit={handleSubmit}
      errors={errors}
      defaultValues={defaultValues}
    ></UpdateReferentialCustomerView>
  );
};
