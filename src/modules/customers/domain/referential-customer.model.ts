import {
  ReferentialViewModel,
  ReferentialViewModelProps,
} from "../../referential/domain/referential.model";
import { UseCaseReferentialEnum } from "../dtos/customers.dto.generated";
import { ParamReferentialCustomerViewModelProps } from "./parameter-referential-customer.model";

export interface ReferentialCustomerViewModelProps
  extends ReferentialViewModelProps<
    UseCaseReferentialEnum,
    ParamReferentialCustomerViewModelProps
  > {}

export class ReferentialCustomerViewModel extends ReferentialViewModel<
  UseCaseReferentialEnum,
  ParamReferentialCustomerViewModelProps
> {
  public static create(
    props: ReferentialCustomerViewModelProps
  ): ReferentialCustomerViewModel {
    return new ReferentialCustomerViewModel(props);
  }
}
