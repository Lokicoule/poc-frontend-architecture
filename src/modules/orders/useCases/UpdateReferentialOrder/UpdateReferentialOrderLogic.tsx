import { FetchResult } from "@apollo/client";
import { isEqual } from "lodash";
import { ParameterReferentialEnum } from "../../dtos/orders.dto.generated";
import { UpdateReferentialOrderMutation } from "../../operations/referentialOrders.generated";
import { referentialSchema } from "../../../referential/components/ReferentialForm/ReferentialFormLogic";
import { ReferentialOrderViewModel } from "../../../../viewModels/referential/orders/ReferentialOrderViewModel";
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
  const handleSubmit = async (data: ReferentialOrderViewModel) => {
    if (!isEqual(defaultValues, data)) await onSubmit(data);
  };

  return (
    <UpdateReferentialOrderView
      onSubmit={handleSubmit}
      errors={errors}
      defaultValues={defaultValues}
      schema={referentialSchema(ParameterReferentialEnum)}
      parameterReferentialEnum={ParameterReferentialEnum}
    ></UpdateReferentialOrderView>
  );
};
