import { FetchResult } from "@apollo/client";
import { isEqual } from "lodash";
import { ReferentialCustomerViewModel } from "../../../../viewModels/referential/customers/ReferentialCustomerViewModel";
import { referentialSchema } from "../../../referential/components/ReferentialForm/ReferentialFormLogic";
import { ParameterReferentialEnum } from "../../dtos/customers.dto.generated";
import { UpdateReferentialCustomerMutation } from "../../operations/referentialCustomers.generated";
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
      schema={referentialSchema(ParameterReferentialEnum)}
      parameterReferentialEnum={ParameterReferentialEnum}
    ></UpdateReferentialCustomerView>
  );
};
