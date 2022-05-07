import { FetchResult } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReferentialProductViewModel } from "../../domain/referential-product.model";
import { productsNavigationHelper } from "../../helpers/products-navigation.helper";
import { UpdateReferentialProductMutation } from "../../operations/referential-products.generated";
import {
  UpdateReferentialProductView,
  UpdateReferentialProductViewProps,
} from "./UpdateReferentialProductView";

type UpdateReferentialProductLogicProps = Pick<
  UpdateReferentialProductViewProps,
  "errors"
> & {
  defaultValues: ReferentialProductViewModel;
  onSubmit: (
    data: ReferentialProductViewModel
  ) => Promise<
    FetchResult<
      UpdateReferentialProductMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

export const UpdateReferentialProductLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateReferentialProductLogicProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (data: ReferentialProductViewModel) => {
    if (defaultValues.equals(data)) {
      toast.info("Nothing to save");
      return;
    }
    await onSubmit(data)
      .then((result) => {
        toast.success(
          `${result.data?.updateReferentialProduct.useCase} a été modifié(e) avec succès.`
        );
        navigate(productsNavigationHelper.rootReferential());
      })
      .catch((error) =>
        toast.error(
          `Le paramètrage du gestionnaire de commande ${defaultValues.useCase} a échoué.`
        )
      );
  };

  return (
    <UpdateReferentialProductView
      onSubmit={handleSubmit}
      errors={errors}
      defaultValues={defaultValues}
    ></UpdateReferentialProductView>
  );
};
