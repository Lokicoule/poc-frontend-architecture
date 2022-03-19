import { FetchResult } from "@apollo/client";
import { isEqual } from "lodash";
import { UpdateReferentialCustomerMutation } from "../../../../api/hooks/referentialCustomers.generated";
import { ReferentialCustomerViewModel } from "../../../../view-models/referential/customers/ReferentialCustomerViewModel";
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
  const handleSubmit = async (data: ReferentialCustomerViewModel) => {
    if (!isEqual(defaultValues, data)) await onSubmit(data);
  };

  return (
    <UpdateReferentialCustomerView
      onSubmit={handleSubmit}
      errors={errors}
      defaultValues={defaultValues}
    ></UpdateReferentialCustomerView>
  );
};
