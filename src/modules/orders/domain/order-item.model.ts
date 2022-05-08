import { ValueObject } from "../../../core/domain/ValueObject";
import { OrderProductViewModelProps } from "./order-product.model";

export interface OrderItemViewModelProps {
  id: string;
  unitPrice: number;
  amount: number;
  product: OrderProductViewModelProps;
}

export class OrderItemViewModel extends ValueObject<OrderItemViewModelProps> {
  get id() {
    return this.props.id;
  }

  get amount() {
    return this.props.amount;
  }

  get unitPrice() {
    return this.props.unitPrice;
  }

  get product() {
    return this.props.product;
  }

  public static create(props: OrderItemViewModelProps): OrderItemViewModel {
    return new OrderItemViewModel(props);
  }
}
