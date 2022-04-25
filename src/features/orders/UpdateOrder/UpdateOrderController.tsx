import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetCustomersQuery } from "../../../api/fdo/operations/customers.generated";
import {
  GetOrderQuery,
  useGetOrderQuery,
  useUpdateOrderMutation,
} from "../../../api/fdo/operations/orders.generated";
import { useGetProductsQuery } from "../../../api/fdo/operations/products.generated";
import {
  CreateOrderInput,
  OrderCustomerInput,
  OrderItemInput,
  OrderProductInput,
} from "../../../api/fdo/types/dto-types.generated";
import { Loader } from "../../../components/Loader/Loader";
import {
  FormOrderItemViewModel,
  FormOrderViewModel,
} from "../../../viewModels/orders";
import { OrderCustomerViewModel } from "../../../viewModels/orders/OrderCustomerViewModel";
import { OrderProductViewModel } from "../../../viewModels/orders/OrderProductViewModel";
import { UpdateOrderLogic } from "./UpdateOrderLogic";

type UpdateOrderControllerProps = {
  orderId: string;
};

export const UpdateOrderController = ({
  orderId,
}: UpdateOrderControllerProps) => {
  const navigate = useNavigate();
  const { data, loading } = useGetOrderQuery({
    variables: {
      getOrderId: orderId,
    },
  });
  const [updateOrder, { error }] = useUpdateOrderMutation({
    refetchQueries: ["GetOrder", "GetOrders"],
  });
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

  const customerViewModelToDto = (customerId: string): OrderCustomerInput => {
    const customer =
      customers?.getCustomers?.find((customer) => customer.id === customerId) ||
      mapCustomerDtoToViewModel(data);
    return {
      id: customer.id,
      address: customer.address,
      city: customer.city,
      code: customer.code,
      naming: customer.naming,
      zipCode: customer.zipCode,
    };
  };

  const mapDtoToViewModel = (
    dataDto: GetOrderQuery | undefined
  ): FormOrderViewModel => {
    const order = dataDto?.getOrder;
    return {
      code: order?.code || "",
      billingDate: new Date(order?.billingDate),
      dueDate: new Date(order?.dueDate),
      customerId: order?.customer.id,
      items: order?.items?.map((item) => ({
        amount: item.amount,
        unitPrice: item.unitPrice,
        productId: item.product?.id,
      })),
    } as FormOrderViewModel;
  };

  const mapCustomerDtoToViewModel = (
    dataDto: GetOrderQuery | undefined
  ): OrderCustomerViewModel => {
    const customer = dataDto?.getOrder?.customer;
    return {
      id: customer?.id || "",
      code: customer?.code || "",
      address: customer?.address || "",
      city: customer?.city || "",
      naming: customer?.naming || "",
      zipCode: customer?.zipCode || "",
    };
  };

  const mapProductsDtoToViewModel = (
    dataDto: GetOrderQuery | undefined
  ): OrderProductViewModel[] => {
    const items = dataDto?.getOrder?.items;
    return (
      items?.map(
        (item) =>
          ({
            id: item.product?.id,
            code: item.product?.code,
            label: item.product?.label,
          } as OrderProductViewModel)
      ) || []
    );
  };

  const mapItemsViewModelToDto = (
    items: FormOrderItemViewModel[]
  ): OrderItemInput[] =>
    items.map(
      (item) =>
        ({
          amount: Number(item.amount),
          product: productViewModelToDto(item.productId),
          unitPrice: Number(item.unitPrice),
        } as OrderItemInput)
    );

  const mapViewModelToDto = (data: FormOrderViewModel): CreateOrderInput => ({
    code: data?.code,
    customer: customerViewModelToDto(data.customerId),
    billingDate: data?.billingDate,
    dueDate: data?.dueDate,
    items: mapItemsViewModelToDto(data?.items),
  });

  const handleSubmit = (dataVM: FormOrderViewModel) => {
    return updateOrder({
      variables: {
        updateOrderId: orderId,
        updateOrderInput: mapViewModelToDto(dataVM),
      },
      onCompleted: ({ updateOrder }) => {
        toast.success(`${updateOrder.code} a été modifié avec succès.`);
        navigate(`/backoffice/orders/view/${updateOrder.id}`);
      },
      onError: () =>
        toast.error(
          `La modification du produit ${data?.getOrder?.code} a échouée.`
        ),
    });
  };

  if (loading) return <Loader></Loader>;
  return (
    <UpdateOrderLogic
      defaultValues={mapDtoToViewModel(data)}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
      defaultCustomer={mapCustomerDtoToViewModel(data)}
      defaultProducts={mapProductsDtoToViewModel(data)}
    ></UpdateOrderLogic>
  );
};
