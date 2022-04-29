import {
  ReferentialFormProps,
  ReferentialForm,
} from "../../../referential/components/ReferentialForm";
import { FeatureLayout } from "../../../../layouts";

export type UpdateReferentialCustomerViewProps = ReferentialFormProps;

export const UpdateReferentialCustomerView = ({
  onSubmit,
  errors,
  defaultValues,
  parameterReferentialEnum,
  schema,
}: UpdateReferentialCustomerViewProps) => {
  return (
    <FeatureLayout title="Formulaire référentiel client">
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
