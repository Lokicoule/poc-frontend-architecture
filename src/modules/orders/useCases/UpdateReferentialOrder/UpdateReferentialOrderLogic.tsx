import { FetchResult } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReferentialOrderViewModel } from "../../domain/referential-order.model";
import { UpdateReferentialOrderMutation } from "../../operations/referential-orders.generated";
import {
  UpdateReferentialOrderView,
  UpdateReferentialOrderViewProps,
} from "./UpdateReferentialOrderView";

type UpdateReferentialOrderLogicProps = Pick<
  UpdateReferentialOrderViewProps,
  "errors"
> & {
  defaultValues: ReferentialOrderViewModel;
  onSubmit: (
    data: ReferentialOrderViewModel
  ) => Promise<
    FetchResult<
      UpdateReferentialOrderMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

export const UpdateReferentialOrderLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateReferentialOrderLogicProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (data: ReferentialOrderViewModel) => {
    if (defaultValues.equals(data)) {
      toast.info("Nothing to save");
      return;
    }
    await onSubmit(data)
      .then((result) => {
        toast.success(
          `${result.data?.updateReferentialOrder.useCase} a été modifié(e) avec succès.`
        );
        navigate(`/backoffice/referential/orders`);
      })
      .catch((error) =>
        toast.error(
          `Le paramètrage du gestionnaire de commande ${defaultValues.useCase} a échoué.`
        )
      );
  };

  return (
    <UpdateReferentialOrderView
      onSubmit={handleSubmit}
      errors={errors}
      defaultValues={defaultValues}
    ></UpdateReferentialOrderView>
  );
};
