import { ValueObject } from "../../../core/domain/ValueObject";
import { ReferentialViewModelProps } from "../../referential/domain/referential.type";
import { UseCaseReferentialEnum } from "../dtos/orders.dto.generated";
import { ParamReferentialOrderViewModelProps } from "./parameter-referential.model";

export interface ReferentialOrderViewModelProps
  extends ReferentialViewModelProps<
    UseCaseReferentialEnum,
    ParamReferentialOrderViewModelProps
  > {}

export class ReferentialOrderViewModel extends ValueObject<ReferentialOrderViewModelProps> {
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
    props: ReferentialOrderViewModelProps
  ): ReferentialOrderViewModel {
    return new ReferentialOrderViewModel(props);
  }
}
