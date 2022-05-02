import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createReferentialValidationSchema } from "../../../../../referential/validations/referential-validation.schema";
import {
  ReferentialCustomerViewModel,
  ReferentialCustomerViewModelProps,
} from "../../../../domain/referential-customer.model";
import { ParameterReferentialEnum } from "../../../../dtos/customers.dto.generated";
import {
  ReferentialCustomerFormView,
  ReferentialCustomerFormViewProps,
} from "./ReferentialCustomerFormView";

export type ReferentialCustomerFormLogicProps = Pick<
  ReferentialCustomerFormViewProps,
  "errors" | "onSubmit"
> & {
  defaultValues: ReferentialCustomerViewModel;
};

export const ReferentialCustomerFormLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: ReferentialCustomerFormLogicProps) => {
  const form = useForm<ReferentialCustomerViewModelProps>({
    defaultValues: defaultValues.props,
    resolver: yupResolver(
      createReferentialValidationSchema(ParameterReferentialEnum.Counter)
    ),
  });
  const handleReset = () => form.reset();

  return (
    <ReferentialCustomerFormView
      form={form}
      onSubmit={onSubmit}
      onReset={handleReset}
      errors={errors}
    ></ReferentialCustomerFormView>
  );
};
