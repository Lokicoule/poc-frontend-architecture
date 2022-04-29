import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addDays } from "../../../../core/utils/DateUtils";
import {
  FormOrderItemViewModel,
  FormOrderViewModel,
} from "../../../../viewModels/orders";
import { useGetCustomersQuery } from "../../../customers/operations/customers.generated";
import { useGetProductsQuery } from "../../../products/operations/products.generated";
import {
  OrderProductInput,
  OrderItemInput,
  OrderCustomerInput,
  CreateOrderInput,
} from "../../dtos/orders.dto.generated";
import { useCreateOrderMutation } from "../../operations/orders.generated";
import { CreateOrderLogic } from "./CreateOrderLogic";

const defaultValues = {
  code: "",
  customerId: "",
  dueDate: addDays(new Date(), 30),
  billingDate: new Date(),
  items: [
    {
      amount: 0,
      unitPrice: 0,
      productId: "",
    },
  ],
} as Readonly<FormOrderViewModel>;

export const CreateOrderController = () => {
  const navigate = useNavigate();

  const [createOrder, { error }] = useCreateOrderMutation({});
  const { data: customers } = useGetCustomersQuery({
    fetchPolicy: "cache-only",
  });
  const { data: products } = useGetProductsQuery({
    fetchPolicy: "cache-only",
  });

  const productViewModelToDto = (productId: string): OrderProductInput => {
    const product = products?.getProducts?.find(
      (product) => product.id === productId
    );
    return {
      id: product?.id || "",
      code: product?.code || "",
      label: product?.label || "",
    };
  };

  const mapItemsViewModelToDto = (
    items: FormOrderItemViewModel[]
  ): OrderItemInput[] => {
    return items.map(
      (item) =>
        ({
          amount: Number(item.amount),
          product: productViewModelToDto(item.productId),
          unitPrice: Number(item.unitPrice),
        } as OrderItemInput)
    );
  };

  const customerViewModelToDto = (customerId: string): OrderCustomerInput => {
    const customer = customers?.getCustomers?.find(
      (customer) => customer.id === customerId
    );
    return {
      id: customer?.id || "",
      address: customer?.address || "",
      city: customer?.city || "",
      code: customer?.code || "",
      naming: customer?.naming || "",
      zipCode: customer?.zipCode || "",
    };
  };

  const mapViewModelToDto = (data: FormOrderViewModel): CreateOrderInput => ({
    code: data?.code,
    customer: customerViewModelToDto(data.customerId),
    billingDate: data?.billingDate,
    dueDate: data?.dueDate,
    items: mapItemsViewModelToDto(data?.items),
  });

  const handleSubmit = (data: FormOrderViewModel) => {
    return createOrder({
      variables: {
        createOrderInput: mapViewModelToDto(data),
      },
      onCompleted: ({ createOrder }) => {
        toast.success(`${createOrder.code} a été ajoutée avec succès.`);
        navigate(`/backoffice/orders/view/${createOrder.id}`);
      },
      onError: () =>
        toast.error(`L'ajout de la commande ${data.code} a échoué.`),
    });
  };

  return (
    <CreateOrderLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></CreateOrderLogic>
  );
};
