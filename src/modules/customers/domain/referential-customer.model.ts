import { ValueObject } from "../../../core/domain/ValueObject";
import { ReferentialViewModelProps } from "../../referential/domain/referential.type";
import { UseCaseReferentialEnum } from "../dtos/customers.dto.generated";
import { ParamReferentialCustomerViewModel } from "./parameter-referential.model";

export class ReferentialCustomerViewModel extends ValueObject<
  ReferentialViewModelProps<
    UseCaseReferentialEnum,
    ParamReferentialCustomerViewModel
  >
> {
  get id() {
    return this.props.id;
  }

  get useCase() {
    return this.props.useCase;
  }

  get parameters() {
    return this.props.parameters;
  }

  public static create(
    props: ReferentialViewModelProps<
      UseCaseReferentialEnum,
      ParamReferentialCustomerViewModel
    >
  ): ReferentialCustomerViewModel {
    return new ReferentialCustomerViewModel(props);
  }
}
