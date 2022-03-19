import { GraphQLErrors } from "@apollo/client/errors";
import { Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../../../../components/Form";
import { FormInputText } from "../../../../components/Form/FormInputs";
import { FeatureLayout } from "../../../../layouts";
import { ReferentialCustomerViewModel } from "../../../../view-models/referential/customers/ReferentialCustomerViewModel";
import { ReferentialParamsTableForm } from "./components/ReferentialParamsTableForm";

export type UpdateReferentialCustomerViewProps = {
  form: UseFormReturn<ReferentialCustomerViewModel>;
  errors: GraphQLErrors | undefined;
  onSubmit: (data: ReferentialCustomerViewModel) => Promise<void>;
  onReset: () => void;
};

export const UpdateReferentialCustomerView = ({
  form,
  onSubmit,
  onReset,
  errors,
}: UpdateReferentialCustomerViewProps) => {
  const { formState, handleSubmit, control } = form;
  return (
    <FeatureLayout title="Formulaire référentiel client">
      <Form errors={errors} onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} justifyContent="center">
            <FormInputText
              name="useCase"
              control={control}
              label="Cas d'usage"
              fullWidth
              required
              disabled
              error={!!formState?.errors?.useCase}
              helperText={formState?.errors?.useCase?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <ReferentialParamsTableForm
              control={control}
              formState={formState}
            ></ReferentialParamsTableForm>
          </Grid>
        </Grid>
      </Form>
    </FeatureLayout>
  );
};
