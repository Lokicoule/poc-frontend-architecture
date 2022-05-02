import { FeatureLayout } from "../../../../layouts";
import {
  ReferentialCustomerForm,
  ReferentialCustomerFormProps,
} from "./components/ReferentialCustomerForm";

export type UpdateReferentialCustomerViewProps = ReferentialCustomerFormProps;

export const UpdateReferentialCustomerView = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateReferentialCustomerViewProps) => {
  return (
    <FeatureLayout title="Formulaire référentiel commande">
      <ReferentialCustomerForm
        errors={errors}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      ></ReferentialCustomerForm>
    </FeatureLayout>
  );
};
