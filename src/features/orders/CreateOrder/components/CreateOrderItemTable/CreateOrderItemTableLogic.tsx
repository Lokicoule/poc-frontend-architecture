import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Control, FormState, useFieldArray } from "react-hook-form";
import { ColumnProps } from "../../../../../components";
import { FormInputText } from "../../../../../components/Form/FormInputs";
import {
  CreateOrderItemViewModel,
  CreateOrderViewModel,
} from "../../../../../view-models/orders";
import { SelectProduct } from "../SelectProduct";
import { CreateOrderItemTableView } from "./CreateOrderItemTableView";

export type CreateOrderItemTableLogicProps = {
  control: Control<any, any>;
  formState: FormState<CreateOrderViewModel>;
};

export const CreateOrderItemTableLogic = ({
  control,
  formState,
}: CreateOrderItemTableLogicProps) => {
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
              !!formState?.errors?.items &&
              !!formState?.errors?.items[0]?.product
            }
            helperText={
              formState?.errors?.items &&
              formState?.errors?.items[0]?.product?.message
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
              formState?.errors?.items && !!formState?.errors?.items[0]?.amount
            }
            helperText={
              formState?.errors?.items &&
              formState?.errors?.items[0]?.amount?.message
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
              !!formState?.errors?.items[0]?.unitPrice
            }
            helperText={
              formState?.errors?.items &&
              formState?.errors?.items[0]?.unitPrice?.message
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
    } as CreateOrderItemViewModel);

  return (
    <CreateOrderItemTableView
      columns={columns}
      data={fields}
      onAppend={handleAppend}
    ></CreateOrderItemTableView>
  );
};
