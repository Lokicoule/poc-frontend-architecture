import { Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { Form, FormProps } from "../../../../components/Form";
import { FormInputText } from "../../../../components/Form/FormInput";
import { ReferentialProductViewModel } from "../../../../viewModels/referential/products/ReferentialProductViewModel";
import { ReferentialParamsTableForm } from "./ReferentialParamsTableForm";
import { ReferentialParamsTableFormLogicProps } from "./ReferentialParamsTableForm/ReferentialParamsTableFormLogic";

export type ReferentialFormViewProps = FormProps &
  Pick<ReferentialParamsTableFormLogicProps, "parameterReferentialEnum"> & {
    form: UseFormReturn<ReferentialProductViewModel>;
  };

export const ReferentialFormView = ({
  parameterReferentialEnum,
  form,
  onSubmit,
  onReset,
  errors,
}: ReferentialFormViewProps) => {
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
          <ReferentialParamsTableForm
            control={control}
            formState={formState}
            parameterReferentialEnum={parameterReferentialEnum}
          ></ReferentialParamsTableForm>
        </Grid>
      </Grid>
    </Form>
  );
};
