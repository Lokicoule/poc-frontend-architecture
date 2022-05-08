import { BaseID } from "../../../core/domain/BaseID";
import { ValueObject } from "../../../core/domain/ValueObject";

export interface OrderCustomerViewModelProps extends BaseID {
  id: string;
  address: string;
  city: string;
  code: string;
  naming: string;
  zipCode: string;
}

/* export interface UpdateCustomerOrderViewModelProps
  extends Omit<CustomerOrderViewModelProps, "id"> {}

export interface CreateCustomerOrderViewModelProps
  extends Omit<UpdateCustomerOrderViewModelProps, "code">,
    Partial<Pick<UpdateCustomerOrderViewModelProps, "code">> {}
 */
export class OrderCustomerViewModel extends ValueObject<OrderCustomerViewModelProps> {
  get id() {
    return this.props.id;
  }

  get code() {
    return this.props.code;
  }

  get naming() {
    return this.props.naming;
  }

  get address() {
    return this.props.address;
  }

  get city() {
    return this.props.city;
  }

  get zipCode() {
    return this.props.zipCode;
  }

  public static create(
    props: OrderCustomerViewModelProps
  ): OrderCustomerViewModel {
    return new OrderCustomerViewModel(props);
  }
}
