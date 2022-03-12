import { GraphQLErrors } from "@apollo/client/errors";
import { Grid } from "@mui/material";
import { FeatureLayout } from "../../../layouts";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../../../components/Form";
import { FormInputText } from "../../../components/Form/FormInputs";
import { UpdateProductViewModel } from "../../../view-models/domain/products";

export type UpdateProductViewProps = {
  form: UseFormReturn<UpdateProductViewModel>;
  errors: GraphQLErrors | undefined;
  onSubmit: (data: UpdateProductViewModel) => Promise<void>;
  onReset: () => void;
};

export const UpdateProductView = ({
  form,
  onSubmit,
  onReset,
  errors,
}: UpdateProductViewProps) => {
  const { formState, handleSubmit, control } = form;
  return (
    <FeatureLayout title="Formulaire client">
      <Form errors={errors} onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormInputText
              name="code"
              control={control}
              label="Code produit"
              fullWidth
              required
              error={!!formState?.errors?.code}
              helperText={formState?.errors?.code?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInputText
              name="label"
              control={control}
              label="Label produit"
              fullWidth
              required
              error={!!formState?.errors?.label}
              helperText={formState?.errors?.label?.message}
            />
          </Grid>
        </Grid>
      </Form>
    </FeatureLayout>
  );
};
