import { GraphQLErrors } from "@apollo/client/errors";
import { Grid } from "@mui/material";
import { FeatureLayout } from "../../../layouts";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../../../components/Form";
import { FormInputText } from "../../../components/Form/FormInputs";
import { UpdateOrderViewModel } from "../../../view-models/orders";

export type UpdateOrderViewProps = {
  form: UseFormReturn<UpdateOrderViewModel>;
  errors: GraphQLErrors | undefined;
  onSubmit: (data: UpdateOrderViewModel) => Promise<void>;
  onReset: () => void;
};

export const UpdateOrderView = ({
  form,
  onSubmit,
  onReset,
  errors,
}: UpdateOrderViewProps) => {
  const { formState, handleSubmit, control } = form;
  return (
    <FeatureLayout title="Formulaire commande">
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
        </Grid>
      </Form>
    </FeatureLayout>
  );
};
