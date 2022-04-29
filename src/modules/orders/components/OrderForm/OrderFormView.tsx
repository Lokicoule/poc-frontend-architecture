import { GraphQLErrors } from "@apollo/client/errors";
import { Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../../../../components/Form";
import { FormInputText } from "../../../../components/Form/FormInput";
import { FormInputDatePicker } from "../../../../components/Form/FormInput";
import { FeatureLayout } from "../../../../layouts";
import { FormOrderViewModel } from "../../../../viewModels/orders";
import { OrderCustomerViewModel } from "../../../../viewModels/orders/OrderCustomerViewModel";
import { OrderProductViewModel } from "../../../../viewModels/orders/OrderProductViewModel";
import { OrderItemTableForm } from "./OrderItemTableForm";
import { SelectCustomer } from "./SelectCustomer";

export type OrderFormViewProps = {
  form: UseFormReturn<FormOrderViewModel>;
  errors: GraphQLErrors | undefined;
  onSubmit: (data: FormOrderViewModel) => Promise<void>;
  onReset: () => void;
  defaultCustomer?: OrderCustomerViewModel;
  defaultProducts?: OrderProductViewModel[];
};

export const OrderFormView = ({
  form,
  onSubmit,
  onReset,
  errors,
  defaultCustomer,
  defaultProducts,
}: OrderFormViewProps) => {
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
          <Grid item xs={12} sm={6}>
            <SelectCustomer
              control={control}
              error={!!formState?.errors?.customerId}
              helperText={formState?.errors?.customerId?.message}
              defaultValue={defaultCustomer}
              name="customerId"
            ></SelectCustomer>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInputDatePicker
              name="billingDate"
              control={control}
              label="Date commande"
              fullWidth
              error={!!formState?.errors?.billingDate}
              helperText={formState?.errors?.billingDate?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInputDatePicker
              name="dueDate"
              control={control}
              label="Date échéance"
              fullWidth
              error={!!formState?.errors?.dueDate}
              helperText={formState?.errors?.dueDate?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <OrderItemTableForm
              formState={formState}
              control={control}
              defaultProducts={defaultProducts}
            ></OrderItemTableForm>
          </Grid>
        </Grid>
      </Form>
    </FeatureLayout>
  );
};
