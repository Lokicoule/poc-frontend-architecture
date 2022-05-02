import { FeatureLayout } from "../../../../layouts";
import {
  ReferentialOrderForm,
  ReferentialOrderFormProps,
} from "./components/ReferentialOrderForm";

export type UpdateReferentialOrderViewProps = ReferentialOrderFormProps;

export const UpdateReferentialOrderView = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateReferentialOrderViewProps) => {
  return (
    <FeatureLayout title="Formulaire référentiel commande">
      <ReferentialOrderForm
        errors={errors}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      ></ReferentialOrderForm>
    </FeatureLayout>
  );
};
