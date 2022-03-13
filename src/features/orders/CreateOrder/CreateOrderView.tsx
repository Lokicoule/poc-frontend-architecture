import { GraphQLErrors } from "@apollo/client/errors";
import { Grid } from "@mui/material";
import { FeatureLayout } from "../../../layouts";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../../../components/Form";
import { FormInputText } from "../../../components/Form/FormInputs";
import { CreateOrderViewModel } from "../../../view-models/orders";

export type CreateOrderViewProps = {
  form: UseFormReturn<CreateOrderViewModel>;
  errors: GraphQLErrors | undefined;
  onSubmit: (data: CreateOrderViewModel) => Promise<void>;
  onReset: () => void;
};

export const CreateOrderView = ({
  form,
  onSubmit,
  onReset,
  errors,
}: CreateOrderViewProps) => {
  const { formState, handleSubmit, control } = form;

  return (
    <FeatureLayout title="Formulaire commande">
      <Form errors={errors} onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormInputText
              name="code"
              control={control}
              label="Code commande"
              fullWidth
              error={!!formState?.errors?.code}
              helperText={formState?.errors?.code?.message}
            />
          </Grid>
        </Grid>
      </Form>
    </FeatureLayout>
  );
};
