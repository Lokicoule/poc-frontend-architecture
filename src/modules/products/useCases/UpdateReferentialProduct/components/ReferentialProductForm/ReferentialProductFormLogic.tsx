import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createReferentialValidationSchema } from "../../../../../referential/validations/referential-validation.schema";
import {
  ReferentialProductViewModel,
  ReferentialProductViewModelProps,
} from "../../../../domain/referential-product.model";
import { ParameterReferentialEnum } from "../../../../dtos/products.dto.generated";
import {
  ReferentialProductFormView,
  ReferentialProductFormViewProps,
} from "./ReferentialProductFormView";

export type ReferentialProductFormLogicProps = Pick<
  ReferentialProductFormViewProps,
  "errors" | "onSubmit"
> & {
  defaultValues: ReferentialProductViewModel;
};

export const ReferentialProductFormLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: ReferentialProductFormLogicProps) => {
  const form = useForm<ReferentialProductViewModelProps>({
    defaultValues: defaultValues.props,
    resolver: yupResolver(
      createReferentialValidationSchema(ParameterReferentialEnum.Counter)
    ),
  });
  const handleReset = () => form.reset();

  return (
    <ReferentialProductFormView
      form={form}
      onSubmit={onSubmit}
      onReset={handleReset}
      errors={errors}
    ></ReferentialProductFormView>
  );
};
