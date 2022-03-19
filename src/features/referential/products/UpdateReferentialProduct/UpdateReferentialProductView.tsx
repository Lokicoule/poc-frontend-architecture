import { FeatureLayout } from "../../../../layouts";
import {
  ReferentialForm,
  ReferentialFormProps,
} from "../../components/ReferentialForm";

export type UpdateReferentialProductViewProps = ReferentialFormProps;

export const UpdateReferentialProductView = ({
  onSubmit,
  errors,
  defaultValues,
  schema,
}: UpdateReferentialProductViewProps) => {
  return (
    <FeatureLayout title="Formulaire référentiel produit">
      <ReferentialForm
        errors={errors}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        schema={schema}
      ></ReferentialForm>
    </FeatureLayout>
  );
};
