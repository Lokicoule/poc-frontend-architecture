import { GraphQLErrors } from "@apollo/client/errors";
import { Grid, MenuItem } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../../../../components/Form";
import {
  FormInputDatePicker,
  FormInputSelect,
  FormInputText,
} from "../../../../components/Form/FormInput";
import { FeatureLayout } from "../../../../layouts";
import { CustomerViewModel } from "../../../customers/domain/customers.model";
import { ProductViewModel } from "../../../products/domain/products.model";
import { OrderItemTableForm } from "../../components/OrderItemTableForm";
import { UpdateOrderViewModelProps } from "../../domain/orders.model";

export type UpdateOrderViewProps = {
  errors: GraphQLErrors | undefined;
  form: UseFormReturn<UpdateOrderViewModelProps>;
  list: {
    customers: CustomerViewModel[];
    products: ProductViewModel[];
  };
  onReset: () => void;
  onSubmit: (data: UpdateOrderViewModelProps) => Promise<void>;
};

export const UpdateOrderView = ({
  form,
  onSubmit,
  onReset,
  errors,
  list,
}: UpdateOrderViewProps) => {
  const { formState, handleSubmit, control } = form;
  const createKey = (id: string) => `select_customer_${id}`;
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
            <FormInputSelect
              label="Client"
              name="customer.id"
              control={control}
              error={!!formState?.errors?.customer?.id}
              helperText={formState?.errors?.customer?.id?.message}
            >
              {list.customers?.map((item) => (
                <MenuItem key={createKey(item.id)} value={item.id}>
                  {item.code} {item.naming && ` - ${item.naming}`}
                </MenuItem>
              ))}
            </FormInputSelect>
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
              products={list.products}
            ></OrderItemTableForm>
          </Grid>
        </Grid>
      </Form>
    </FeatureLayout>
  );
};
