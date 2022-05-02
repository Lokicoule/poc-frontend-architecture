import { FeatureLayout } from "../../../../layouts";
import {
  ReferentialProductForm,
  ReferentialProductFormProps,
} from "./components/ReferentialProductForm";

export type UpdateReferentialProductViewProps = ReferentialProductFormProps;

export const UpdateReferentialProductView = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateReferentialProductViewProps) => {
  return (
    <FeatureLayout title="Formulaire référentiel commande">
      <ReferentialProductForm
        errors={errors}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      ></ReferentialProductForm>
    </FeatureLayout>
  );
};
