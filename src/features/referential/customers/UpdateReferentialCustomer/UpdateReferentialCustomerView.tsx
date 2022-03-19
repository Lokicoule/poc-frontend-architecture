import { FeatureLayout } from "../../../../layouts";
import {
  ReferentialForm,
  ReferentialFormProps,
} from "../../components/ReferentialForm";

export type UpdateReferentialCustomerViewProps = ReferentialFormProps;

export const UpdateReferentialCustomerView = ({
  onSubmit,
  errors,
  defaultValues,
  schema,
}: UpdateReferentialCustomerViewProps) => {
  return (
    <FeatureLayout title="Formulaire référentiel client">
      <ReferentialForm
        errors={errors}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        schema={schema}
      ></ReferentialForm>
    </FeatureLayout>
  );
};
