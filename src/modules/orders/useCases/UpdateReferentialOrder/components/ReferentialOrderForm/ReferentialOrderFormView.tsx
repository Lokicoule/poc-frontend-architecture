import { Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { Form, FormProps } from "../../../../../../components/Form";
import { FormInputText } from "../../../../../../components/Form/FormInput";
import { ReferentialOrderViewModelProps } from "../../../../domain/referential-order.model";
import { ReferentialOrderTableForm } from "../ReferentialOrderTableForm";

export type ReferentialOrderFormViewProps = FormProps & {
  form: UseFormReturn<ReferentialOrderViewModelProps>;
};

export const ReferentialOrderFormView = ({
  form,
  onSubmit,
  onReset,
  errors,
}: ReferentialOrderFormViewProps) => {
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
          <ReferentialOrderTableForm
            control={control}
            formState={formState}
          ></ReferentialOrderTableForm>
        </Grid>
      </Grid>
    </Form>
  );
};
