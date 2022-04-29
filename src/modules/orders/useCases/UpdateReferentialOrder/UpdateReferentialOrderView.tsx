import { FeatureLayout } from "../../../../layouts";
import {
  ReferentialForm,
  ReferentialFormProps,
} from "../../../referential/components/ReferentialForm";

export type UpdateReferentialOrderViewProps = ReferentialFormProps;

export const UpdateReferentialOrderView = ({
  defaultValues,
  parameterReferentialEnum,
  schema,
  onSubmit,
  errors,
}: UpdateReferentialOrderViewProps) => {
  return (
    <FeatureLayout title="Formulaire référentiel commande">
      <ReferentialForm
        errors={errors}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        schema={schema}
        parameterReferentialEnum={parameterReferentialEnum}
      ></ReferentialForm>
    </FeatureLayout>
  );
};
