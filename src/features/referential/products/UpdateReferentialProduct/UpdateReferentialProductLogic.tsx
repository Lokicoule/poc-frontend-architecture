import { FetchResult } from "@apollo/client";
import { isEqual } from "lodash";
import { UpdateReferentialProductMutation } from "../../../../api/fdo/operations/referentialProducts.generated";
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
    ></UpdateReferentialProductView>
  );
};
