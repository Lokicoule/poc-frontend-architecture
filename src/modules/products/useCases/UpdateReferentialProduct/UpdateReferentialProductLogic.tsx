import { FetchResult } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { referentialSchema } from "../../../referential/components/ReferentialForm/ReferentialFormLogic";
import { ReferentialProductViewModel } from "../../domain/referential-product.model";
import { ParameterReferentialEnum } from "../../dtos/products.dto.generated";
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
        navigate(`/backoffice/referential/products`);
      })
      .catch((error) =>
        toast.error(
          `La modification du référentiel produit ${defaultValues.useCase} a échouée.`
        )
      );
  };

  return (
    <UpdateReferentialProductView
      onSubmit={handleSubmit}
      errors={errors}
      defaultValues={defaultValues}
      schema={referentialSchema(ParameterReferentialEnum)}
      parameterReferentialEnum={ParameterReferentialEnum}
    ></UpdateReferentialProductView>
  );
};
