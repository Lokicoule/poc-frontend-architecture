import { addDays } from "../../../../core/utils/DateUtils";
import { OrderCustomerViewModelProps } from "../../domain/order-customer.model";
import { OrderProductViewModelProps } from "../../domain/order-product.model";
import { CreateOrderViewModelProps } from "../../domain/orders.model";
import { useCreateOrderFacade } from "../../hooks/useCreateOrderFacade";
import { CreateOrderLogic } from "./CreateOrderLogic";

const defaultValues = {
  code: "",
  customer: {} as OrderCustomerViewModelProps,
  dueDate: addDays(new Date(), 30),
  billingDate: new Date(),
  items: [
    {
      amount: 0,
      unitPrice: 0,
      product: {} as OrderProductViewModelProps,
    },
  ],
} as Readonly<CreateOrderViewModelProps>;

export const CreateOrderController = () => {
  const { createOrder, customers, products } = useCreateOrderFacade();

  const handleSubmit = (data: CreateOrderViewModelProps) =>
    createOrder.onCreate(data);

  return (
    <CreateOrderLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      errors={createOrder.error?.graphQLErrors}
      list={{ customers: customers.data, products: products.data }}
    ></CreateOrderLogic>
  );
};
