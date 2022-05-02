import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createReferentialValidationSchema } from "../../../../../referential/validations/referential-validation.schema";
import {
  ReferentialOrderViewModel,
  ReferentialOrderViewModelProps,
} from "../../../../domain/referential-order.model";
import { ParameterReferentialEnum } from "../../../../dtos/orders.dto.generated";
import {
  ReferentialOrderFormView,
  ReferentialOrderFormViewProps,
} from "./ReferentialOrderFormView";

export type ReferentialOrderFormLogicProps = Pick<
  ReferentialOrderFormViewProps,
  "errors" | "onSubmit"
> & {
  defaultValues: ReferentialOrderViewModel;
};

export const ReferentialOrderFormLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: ReferentialOrderFormLogicProps) => {
  const form = useForm<ReferentialOrderViewModelProps>({
    defaultValues: defaultValues.props,
    resolver: yupResolver(
      createReferentialValidationSchema(ParameterReferentialEnum.Counter)
    ),
  });
  const handleReset = () => form.reset();

  return (
    <ReferentialOrderFormView
      form={form}
      onSubmit={onSubmit}
      onReset={handleReset}
      errors={errors}
    ></ReferentialOrderFormView>
  );
};
