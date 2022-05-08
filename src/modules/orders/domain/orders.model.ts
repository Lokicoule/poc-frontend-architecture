import { BaseID } from "../../../core/domain/BaseID";
import { ValueObject } from "../../../core/domain/ValueObject";
import { OrderCustomerViewModelProps } from "./order-customer.model";
import { OrderItemViewModelProps } from "./order-item.model";

export interface OrderViewModelProps extends BaseID {
  code: string;
  id: string;
  billingDate: Date;
  dueDate: Date;
  items: OrderItemViewModelProps[];
  customer: OrderCustomerViewModelProps;
}

export interface UpdateOrderViewModelProps
  extends Omit<OrderViewModelProps, "id"> {}

export interface CreateOrderViewModelProps
  extends Omit<UpdateOrderViewModelProps, "code">,
    Partial<Pick<UpdateOrderViewModelProps, "code">> {}

export class OrderViewModel extends ValueObject<OrderViewModelProps> {
  get id() {
    return this.props.id;
  }

  get code() {
    return this.props.code;
  }

  get billingDate() {
    return this.props.billingDate;
  }

  get dueDate() {
    return this.props.dueDate;
  }

  get customer() {
    return this.props.customer;
  }

  get items() {
    return this.props.items;
  }

  public static create(props: OrderViewModelProps): OrderViewModel {
    return new OrderViewModel(props);
  }
}
