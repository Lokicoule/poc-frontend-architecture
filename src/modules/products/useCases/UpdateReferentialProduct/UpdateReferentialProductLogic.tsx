import { FetchResult } from "@apollo/client";
import { isEqual } from "lodash";
import { ParameterReferentialEnum } from "../../dtos/products.dto.generated";
import { UpdateReferentialProductMutation } from "../../operations/referentialProducts.generated";
import { referentialSchema } from "../../../referential/components/ReferentialForm/ReferentialFormLogic";
import { ReferentialProductViewModel } from "../../../../viewModels/referential/products/ReferentialProductViewModel";
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
  const handleSubmit = async (data: ReferentialProductViewModel) => {
    if (!isEqual(defaultValues, data)) await onSubmit(data);
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
