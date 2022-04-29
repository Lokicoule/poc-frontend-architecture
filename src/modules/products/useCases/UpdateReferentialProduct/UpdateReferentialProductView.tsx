import { FeatureLayout } from "../../../../layouts";
import {
  ReferentialForm,
  ReferentialFormProps,
} from "../../../referential/components/ReferentialForm";

export type UpdateReferentialProductViewProps = ReferentialFormProps;

export const UpdateReferentialProductView = ({
  defaultValues,
  schema,
  parameterReferentialEnum,
  onSubmit,
  errors,
}: UpdateReferentialProductViewProps) => {
  return (
    <FeatureLayout title="Formulaire référentiel produit">
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
