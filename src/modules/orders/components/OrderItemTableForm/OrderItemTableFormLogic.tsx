import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, MenuItem } from "@mui/material";
import { Control, FormState, useFieldArray } from "react-hook-form";
import {
  FormInputSelect,
  FormInputText,
} from "../../../../components/Form/FormInput";
import { ColumnProps } from "../../../../components/Tables";
import { ProductViewModel } from "../../../products/domain/products.model";
import { OrderItemViewModelProps } from "../../domain/order-item.model";
import { OrderProductViewModelProps } from "../../domain/order-product.model";
import { CreateOrderViewModelProps } from "../../domain/orders.model";
import { OrderItemTableFormView } from "./OrderItemTableFormView";

export type OrderItemTableFormLogicProps = {
  control: Control<any, any>;
  formState: FormState<CreateOrderViewModelProps>;
  products: ProductViewModel[];
};

export const OrderItemTableFormLogic = ({
  control,
  formState,
  products,
}: OrderItemTableFormLogicProps) => {
  const { fields, append, remove } = useFieldArray({ name: "items", control });
  const createKey = (id: string) => `select_product_${id}`;
  const columns: ColumnProps[] = [
    {
      key: "product",
      label: "Code produit",
      content: (item: OrderItemViewModelProps, idx) => {
        return (
          <FormInputSelect
            label="Produit"
            name={`items[${idx}].product.id`}
            control={control}
            error={
              formState?.errors?.items &&
              !!formState?.errors?.items[idx]?.product?.id
            }
            helperText={
              formState?.errors?.items &&
              formState?.errors?.items[idx]?.product?.id?.message
            }
          >
            {products?.map((item) => (
              <MenuItem key={createKey(item.id)} value={item.id}>
                {item.code}
              </MenuItem>
            ))}
          </FormInputSelect>
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
      product: {} as OrderProductViewModelProps,
    } as OrderItemViewModelProps);

  return (
    <OrderItemTableFormView
      columns={columns}
      data={fields}
      onAppend={handleAppend}
    ></OrderItemTableFormView>
  );
};
