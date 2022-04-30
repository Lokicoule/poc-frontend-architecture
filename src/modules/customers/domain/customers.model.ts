import { ValueObject } from "../../../core/domain/ValueObject";

export interface CustomerViewModelProps {
  address: string;
  city: string;
  code: string;
  id: string;
  naming: string;
  zipCode: string;
}

export interface UpdateCustomerViewModel
  extends Omit<CustomerViewModelProps, "id"> {}

export interface CreateCustomerViewModel
  extends Omit<UpdateCustomerViewModel, "code">,
    Partial<Pick<UpdateCustomerViewModel, "code">> {}

export class CustomerViewModel extends ValueObject<CustomerViewModelProps> {
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

  public static create(props: CustomerViewModelProps): CustomerViewModel {
    return new CustomerViewModel(props);
  }
}
