import { GraphQLErrors } from "@apollo/client/errors";
import { Grid } from "@mui/material";
import { FeatureLayout } from "../../../layouts";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../../../components/Form";
import { FormInputText } from "../../../components/Form/FormInputs";
import { UpdateCustomerViewModel } from "../../../viewModels/customers";

export type UpdateCustomerViewProps = {
  form: UseFormReturn<UpdateCustomerViewModel>;
  errors: GraphQLErrors | undefined;
  onSubmit: (data: UpdateCustomerViewModel) => Promise<void>;
  onReset: () => void;
};

export const UpdateCustomerView = ({
  form,
  onSubmit,
  onReset,
  errors,
}: UpdateCustomerViewProps) => {
  const { formState, handleSubmit, control } = form;
  return (
    <FeatureLayout title="Formulaire client">
      <Form errors={errors} onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormInputText
              name="code"
              control={control}
              label="Code client"
              fullWidth
              required
              error={!!formState?.errors?.code}
              helperText={formState?.errors?.code?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInputText
              name="naming"
              control={control}
              label="Nom client"
              fullWidth
              required
              error={!!formState?.errors?.naming}
              helperText={formState?.errors?.naming?.message}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormInputText
              name="zipCode"
              control={control}
              label="Code postal"
              fullWidth
              required
              error={!!formState?.errors?.zipCode}
              helperText={formState?.errors?.zipCode?.message}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormInputText
              name="city"
              control={control}
              label="Ville"
              fullWidth
              required
              error={!!formState?.errors?.city}
              helperText={formState?.errors?.city?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInputText
              name="address"
              control={control}
              label="Adresse"
              fullWidth
              required
              error={!!formState?.errors?.address}
              helperText={formState?.errors?.address?.message}
            />
          </Grid>
        </Grid>
      </Form>
    </FeatureLayout>
  );
};
