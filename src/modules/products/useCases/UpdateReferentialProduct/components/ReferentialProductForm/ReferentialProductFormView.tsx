import { Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { Form, FormProps } from "../../../../../../components/Form";
import { FormInputText } from "../../../../../../components/Form/FormInput";
import { ReferentialProductViewModelProps } from "../../../../domain/referential-product.model";
import { ReferentialProductTableForm } from "../ReferentialProductTableForm";

export type ReferentialProductFormViewProps = FormProps & {
  form: UseFormReturn<ReferentialProductViewModelProps>;
};

export const ReferentialProductFormView = ({
  form,
  onSubmit,
  onReset,
  errors,
}: ReferentialProductFormViewProps) => {
  const { formState, handleSubmit, control } = form;
  return (
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
          <ReferentialProductTableForm
            control={control}
            formState={formState}
          ></ReferentialProductTableForm>
        </Grid>
      </Grid>
    </Form>
  );
};
