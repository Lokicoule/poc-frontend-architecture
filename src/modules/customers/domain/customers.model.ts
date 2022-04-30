import { ValueObject } from "../../../core/domain/ValueObject";

export interface CreateCustomerViewModel {
  code?: string;
  naming: string;
  zipCode: string;
  city: string;
  address: string;
}

export interface UpdateCustomerViewModel {
  code: string;
  naming: string;
  zipCode: string;
  city: string;
  address: string;
}

export interface CustomerViewModelProps {
  address: string;
  city: string;
  code: string;
  id: string;
  naming: string;
  zipCode: string;
}

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
