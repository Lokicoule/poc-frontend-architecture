import { FeatureLayout } from "../../../../layouts";
import {
  ReferentialForm,
  ReferentialFormProps,
} from "../../components/ReferentialForm";

export type UpdateReferentialOrderViewProps = ReferentialFormProps;

export const UpdateReferentialOrderView = ({
  onSubmit,
  errors,
  defaultValues,
  schema,
}: UpdateReferentialOrderViewProps) => {
  return (
    <FeatureLayout title="Formulaire référentiel commande">
      <ReferentialForm
        errors={errors}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        schema={schema}
      ></ReferentialForm>
    </FeatureLayout>
  );
};
