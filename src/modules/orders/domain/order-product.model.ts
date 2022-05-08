import { BaseID } from "../../../core/domain/BaseID";
import { ValueObject } from "../../../core/domain/ValueObject";

export interface OrderProductViewModelProps extends BaseID {
  code: string;
  label: string;
}

/* export interface UpdateOrderProductViewModelProps
  extends Omit<OrderProductViewModelProps, "id"> {}

export interface CreateOrderProductViewModelProps
  extends Omit<UpdateOrderProductViewModelProps, "code">,
    Partial<Pick<UpdateOrderProductViewModelProps, "code">> {} */

export class OrderProductViewModel extends ValueObject<OrderProductViewModelProps> {
  get id() {
    return this.props.id;
  }

  get code() {
    return this.props.code;
  }

  get label() {
    return this.props.label;
  }

  public static create(
    props: OrderProductViewModelProps
  ): OrderProductViewModel {
    return new OrderProductViewModel(props);
  }
}
