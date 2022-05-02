import { Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { Form, FormProps } from "../../../../../../components/Form";
import { FormInputText } from "../../../../../../components/Form/FormInput";
import { ReferentialCustomerViewModelProps } from "../../../../domain/referential-customer.model";
import { ReferentialCustomerTableForm } from "../ReferentialCustomerTableForm";

export type ReferentialCustomerFormViewProps = FormProps & {
  form: UseFormReturn<ReferentialCustomerViewModelProps>;
};

export const ReferentialCustomerFormView = ({
  form,
  onSubmit,
  onReset,
  errors,
}: ReferentialCustomerFormViewProps) => {
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
          <ReferentialCustomerTableForm
            control={control}
            formState={formState}
          ></ReferentialCustomerTableForm>
        </Grid>
      </Grid>
    </Form>
  );
};
