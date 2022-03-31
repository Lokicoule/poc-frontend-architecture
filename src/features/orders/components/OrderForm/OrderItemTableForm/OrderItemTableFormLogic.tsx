import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Control, FormState, useFieldArray } from "react-hook-form";
import { ColumnProps } from "../../../../../components";
import { FormInputText } from "../../../../../components/Form/FormInputs";
import {
  FormOrderItemViewModel,
  FormOrderViewModel,
} from "../../../../../viewModels/orders";
import { SelectProduct } from "../SelectProduct";
import { OrderItemTableFormView } from "./OrderItemTableFormView";

export type OrderItemTableFormLogicProps = {
  control: Control<any, any>;
  formState: FormState<FormOrderViewModel>;
};

export const OrderItemTableFormLogic = ({
  control,
  formState,
}: OrderItemTableFormLogicProps) => {
  const { fields, append, remove } = useFieldArray({ name: "items", control });

  const columns: ColumnProps[] = [
    {
      key: "product",
      label: "Code produit",
      content: (item, idx) => {
        return (
          <SelectProduct
            control={control}
            name={`items[${idx}].product`}
            error={
              formState?.errors?.items &&
              !!formState?.errors?.items[idx]?.product
            }
            helperText={
              formState?.errors?.items &&
              formState?.errors?.items[idx]?.product?.message
            }
            defaultValue=""
          ></SelectProduct>
        );
      },
    },
    {
      key: "amount",
      label: "Quantité",
      content: (item, idx) => {
        return (
          <FormInputText
            name={`items[${idx}].amount`}
            control={control}
            label="Quantité"
            fullWidth
            error={
              formState?.errors?.items &&
              !!formState?.errors?.items[idx]?.amount
            }
            helperText={
              formState?.errors?.items &&
              formState?.errors?.items[idx]?.amount?.message
            }
          />
        );
      },
    },
    {
      key: "unitPrice",
      label: "Prix unitaire",
      content: (item, idx) => {
        return (
          <FormInputText
            name={`items[${idx}].unitPrice`}
            control={control}
            label="Prix unitaire"
            fullWidth
            error={
              formState?.errors?.items &&
              !!formState?.errors?.items[idx]?.unitPrice
            }
            helperText={
              formState?.errors?.items &&
              formState?.errors?.items[idx]?.unitPrice?.message
            }
          />
        );
      },
    },
    {
      key: "actions",
      label: "Action",
      content: (item, idx) => {
        if (!idx || (!!idx && idx <= 0)) return;
        return (
          <IconButton color="secondary" onClick={() => remove(idx)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  const handleAppend = () =>
    append({
      amount: 0,
      unitPrice: 0,
      product: "",
    } as FormOrderItemViewModel);

  return (
    <OrderItemTableFormView
      columns={columns}
      data={fields}
      onAppend={handleAppend}
    ></OrderItemTableFormView>
  );
};
